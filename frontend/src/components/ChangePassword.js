import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function ChangePassword() {

  //puuttuu vielä tarkistus että käyttäjä on kirjautunut 
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const [error, setError] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const handleChangePasswordSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.oldPassword.value);
    console.log(event.target.newPassword.value);
    console.log(event.target.confirmedPassword.value);
    console.log(
      "/changepassword?username=" +
      event.target.username.value +
      "&oldPassword=" +
      event.target.oldPassword.value +
      "&newPassword=" +
      event.target.newPassword.value
    );


    try {
      const result = await axios.put(Constants.API_ADDRESS + "/changepassword?username=" + event.target.username.value + "&oldPassword=" + event.target.oldPassword.value + "&newPassword=" + event.target.newPassword.value + ".");
      console.log(result);
      navigate("/defaultview", { replace: true });
    }
    catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 403) {
        setError({ confirmedPassword: error.response.data });
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
          else if (input.oldPassword && value === input.oldPassword) {
            stateObj["oldPassword"] = "New password can't be the same as old password";
          }
          else if (input.confirmedPassword && value !== input.confirmedPassword) {
            stateObj["confirmedPassword"] = "Passwords don't match";
          }
          else {
            stateObj["confirmPassword"] = input.confirmedPassword ? "" : error.confirmedPassword;
          }
          break;
        case "confirmPassword":
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h4>Change password</h4>
        <form onSubmit={handleChangePasswordSubmit}>
          <input type="text" name="username" placeholder="Enter username" value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
          {error.username && <span className="err">{error.username} </span>}
          <input type="password" name="oldPassword" placeholder="Enter your current password" value={input.oldPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.oldPassword && <span className="err">{error.oldPassword} </span>}
          <input type="password" name="newPassword" placeholder="Enter your new password" value={input.newPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.newPassword && <span className="err">{error.newPassword} </span>}
          <input type="password" name="confirmedPassword" placeholder="Enter confirmed password" value={input.confirmedPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.confirmedPassword && <span className="err">{error.confirmedPassword} </span>}
          <button type="submit">Change password</button>
        </form>
        <p> <Link to="/defaultview">Don't want to change password?</Link></p>
      </div>
    </div>
  );
}