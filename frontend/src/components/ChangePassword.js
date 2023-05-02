import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function ChangePassword() {

  //get the username from the local storage
  const username = localStorage.getItem("username");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  let navigate = useNavigate();
  const [changePasswordState, setChangePasswordState] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");


  //function to handle the change password submit
  const handleChangePasswordSubmit = async (event) => {
    setErrorMessage("");
    if (newPassword !== confirmedPassword) {
      setErrorMessage("New password does not match with each other, check passwords again")
    }
    else if (password === "") {
      setErrorMessage("Password can't be empty")
    }
    else if (password === newPassword) {
      setErrorMessage("New password can't be the same as your old password")
    } else {
      event.preventDefault();

      setChangePasswordState("processing");

      //send the request to the backend
      await axios.put(Constants.API_ADDRESS + "/changepassword", {
        username: username,
        password: password,
        newPassword: newPassword
      }).then(response => {
        console.log(response);
        console.log(response.config.url);
        setChangePasswordState("success");
        setTimeout(() => {
          setChangePasswordState("idle")
          navigate("/", { replace: true });
        }, 1500);
      }).catch(error => {
        setChangePasswordState("error");
        setTimeout(() => setChangePasswordState("idle"), 1500);
        setErrorMessage("Check that you have entered correct username and password");
        console.log(error);
      })
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [errorMessage]);


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
    <div className="form-container-box">
      <div className="form-box">
        <h4>Change password</h4>
        <form onSubmit={handleChangePasswordSubmit}>
          <input className="passwordinput" type="password" name="password" placeholder="Enter your current password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <input className="passwordinput" type="password" name="newPassword" placeholder="Enter your new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
          <input className="passwordinput" type="password" name="confirmedPassword" placeholder="Enter confirmed password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></input>
          <div>
            <span style={{ color: 'red' }}>{errorMessage}</span>
          </div>
          <div className="horizontal-center">
            {
              passwordControls
            }
          </div>
        </form>
        <p> <Link to="/">Don't want to change password?</Link></p>
      </div>
    </div>
  );
}