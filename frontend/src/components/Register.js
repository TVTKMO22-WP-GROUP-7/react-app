import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';
  
  export default function Register() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [changeRegisterState, setChangeRegisterState] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleRegisterSubmit = async (event) => {
      setErrorMessage("");
      event.preventDefault();
      if (password !== confirmPassword) {
        setErrorMessage("Password and Confirm Password does not match")
        return;
      } else if (password === "") {
        setErrorMessage("Password can't be empty")
        return;
      }  else if (username === "") {
        setErrorMessage("username can't be empty")
        return;
      }
    
      setChangeRegisterState("processing");
      axios.post(Constants.API_ADDRESS + "/register", {
        username: username,
        password: password,
      }).then(response => {
        console.log(response)
        setChangeRegisterState("success");
        setTimeout(() => {
          setChangeRegisterState("idle")
          navigate("/login", { replace: true });
        }, 1500);
      }).catch(error => {
        setChangeRegisterState("error");
        setTimeout(() => {
          setChangeRegisterState("idle")
        }, 1500);
        setErrorMessage("User already exists. Please pick another username")
        console.log(error)
      })
    }
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    
      return () => clearTimeout(timeout);
    }, [errorMessage]);


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
    <div className="form-container-box">
      <div className="form-box">
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
          <div>
            <span style={{ color: 'red' }}>{errorMessage}</span>
          </div>
          <div className="horizontal-center">
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