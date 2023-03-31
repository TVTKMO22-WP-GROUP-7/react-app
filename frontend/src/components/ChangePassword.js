import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function ChangePassword() {

  //puuttuu vielä tarkistus että käyttäjä on kirjautunut 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  let navigate = useNavigate();
  const [changePasswordState, setChangePasswordState] = useState("idle");



  const handleChangePasswordSubmit = async (event) => {
    if (newPassword !== confirmedPassword) {
      alert("New password does not match with each other, check passwords again")
    }
    else if (password === "") {
      alert("Password can't be empty")
    }
    else if (password === newPassword) {
      alert("New password can't be the same as your old password")
    } else {
      event.preventDefault();

      setChangePasswordState("processing");

      await axios.put(Constants.API_ADDRESS + "/changepassword", {},
        {
          params: {
            username,
            password,
            newPassword
          }
        }).then(response => {
          console.log(response)
          setChangePasswordState("success");
          setTimeout(() => {
            setChangePasswordState("idle")
            navigate("/", { replace: true });
          }, 1500);
        }).catch(error => {
          setChangePasswordState("error");
          setTimeout(() => setChangePasswordState("idle"), 1500);
          alert("Check that you have entered correct username and password");
          console.log(error);
        })
    }
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
      <div className="changepassword">
        <div>
          <h4>Change password</h4>
          <form onSubmit={handleChangePasswordSubmit}>
            <input type="text" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" name="password" placeholder="Enter your current password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input type="password" name="newPassword" placeholder="Enter your new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
            <input type="password" name="confirmedPassword" placeholder="Enter confirmed password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></input>
            <div>
              {
                passwordControls
              }
            </div>
          </form>
          <p> <Link to="/">Don't want to change password?</Link></p>
        </div>
      </div>
    </>
  );
}