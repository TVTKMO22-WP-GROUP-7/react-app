import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';
import Navbar from './Navbar';

export default function ChangePassword() {

  //puuttuu vielä tarkistus että käyttäjä on kirjautunut 
  let navigate = useNavigate();
  const [changePasswordState, setChangePasswordState] = useState("idle");
  const [input, setInput] = useState({
    username: '',
    password: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const handleChangePasswordSubmit = async (event) => {
    event.preventDefault();

    setChangePasswordState("processing");

    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log(event.target.newPassword.value);
    console.log(
      "/changepassword?username=" +
      event.target.username.value +
      "&password=" +
      event.target.password.value +
      "&newPassword=" +
      event.target.newPassword.value
    );

    try {
      const result = await axios.put(Constants.API_ADDRESS + "/changepassword?username=" + event.target.username.value + "&password=" + event.target.password.value + "&newPassword=" + event.target.newPassword.value + ".");
      console.log(result);
      setChangePasswordState("success");
      setTimeout(() => {
        setChangePasswordState("idle")
        navigate("/defaultview", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error);
      setChangePasswordState("error");
      setTimeout(() => setChangePasswordState("idle"), 1500);
      if (error.response && error.response.status === 403) {
        setError({ confirmedPassword: error.response.data });
      }
      else {
        setError({ confirmedPassword: "Something went wrong, please try again later" });
      }
    }
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter username";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter your current password";
          }
          break;
        case "newPassword":
          if (!value) {
            stateObj[name] = "Please enter password";

          }
          else if (input.password && value === input.password) {
            stateObj["password"] = "New password can't be the same as old password";
          }
          else if (input.confirmedPassword && value !== input.confirmedPassword) {
            stateObj["confirmedPassword"] = "Passwords don't match";
          }
          else {
            stateObj["confirmedPassword"] = input.confirmedPassword ? "" : error.confirmedPassword;
          }
          break;
        case "confirmedPassword":
          if (!value) {
            stateObj[name] = "Please enter confirm password";
          }
          else if (input.newPassword && value !== input.newPassword) {
            stateObj[name] = "Passwords don't match";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });

  }
    let passwordControls = null;
    switch (changePasswordState) {
      case "idle":
        passwordControls = <button type="submit">Change Password</button>
        break;

      case "processing":
        passwordControls = <span style={{ color: 'blue' }}>Processing password change...</span>
        break;

      case "success":
        passwordControls = <span style={{ color: 'green' }}>Password changed</span>
        break;

      case "error":
        passwordControls = <span style={{ color: 'red' }}>Error</span>
        break;

      default:
        passwordControls = <button type="submit">Go back</button>
    }
  
  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h4>Change password</h4>
        <form onSubmit={handleChangePasswordSubmit}>
          <input type="text" name="username" placeholder="Enter username" value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
          {error.username && <span className="err">{error.username} </span>}
          <input type="password" name="password" placeholder="Enter your current password" value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
          {error.oldPassword && <span className="err">{error.password} </span>}
          <input type="password" name="newPassword" placeholder="Enter your new password" value={input.newPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.newPassword && <span className="err">{error.newPassword} </span>}
          <input type="password" name="confirmedPassword" placeholder="Enter confirmed password" value={input.confirmedPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.confirmedPassword && <span className="err">{error.confirmedPassword} </span>}
          <div>
            {
              passwordControls
            }
          </div>
        </form>
        <p> <Link to="/defaultview">Don't want to change password?</Link></p>
      </div>
    </div>
    </>
  );
}