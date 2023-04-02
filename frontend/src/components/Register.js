import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [changeRegisterState, setChangeRegisterState] = useState("idle");

  const handleRegisterSubmit = async (event) => {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password does not match")
    }
    else if (password === "") {
      alert("Password can't be empty")
    } else {
      event.preventDefault();
      setChangeRegisterState("processing");
      axios.post(Constants.API_ADDRESS + "/register", {},
        {
          params: {
            username,
            password
          }
        }).then(response => {
          console.log(response)
          setChangeRegisterState("success");
          setTimeout(() => {
            setChangeRegisterState("idle")
            navigate("/login", { replace: true });
          }, 1500);
        }).catch(error => {
          setChangeRegisterState("error");
          setTimeout(() => setChangeRegisterState("idle"), 1500);
          alert("User already exist. Please pick another username")
          console.log(error)
        })
    }
  }

  let registerControls = null;
  switch (changeRegisterState) {
    case "idle":
      registerControls = <button type="submit">Register</button>
      break;

    case "processing":
      registerControls = <span style={{ color: 'blue' }}> Processing registration...</span>
      break;

    case "success":
      registerControls = <span style={{ color: 'green' }}> Registration successful!</span>
      break;

    case "error":
      registerControls = <span style={{ color: 'red' }}> Registration failed!</span>
      break;

    default:
      registerControls = <button type="submit">Go Back</button>

  }

  return (
    <div className="register-container">
      <div className="register">
        <h4>Register new user</h4>
        <form onSubmit={handleRegisterSubmit}>
          <input type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
          <input type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
          <input type="password"
            name="confirmPassword"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}>
          </input>
          <div style={{ marginTop: '20px' }}>
            {
              registerControls
            }
          </div>
        </form>
        <p>Already have an account? <Link to="/login">Log in here</Link></p>
      </div>
    </div>
  );
}