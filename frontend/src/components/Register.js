import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function Register() {

  const navigate = useNavigate();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log(
        "/register?username=" +
        event.target.username.value +
        "&password=" +
        event.target.password.value
    );


    try {
      const result = await axios.post(Constants.API_ADDRESS+ "/register?username=" + event.target.username.value + "&password=" + event.target.password.value+".");
      console.log(result);
      navigate("/", {replace:true});
    }
    catch (error) {
      console.log(error);
    }
  };

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

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
            stateObj[name] = "Please enter password";
          }
          else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match";
          }
          else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter confirm password";
          }
          else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  }

  return (
    <div className="register-container">
      <div className="register">
        <h4>Register new user</h4>
        <form onSubmit = {handleRegisterSubmit}>
          <input type="text" name="username" placeholder="Enter username" value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
          {error.username && <span className="err">{error.username} </span>}
          <input type="password" name="password" placeholder="Enter password" value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
          {error.password && <span className="err">{error.password} </span>}
          <input type="password" name="confirmPassword" placeholder="Enter confirm password" value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput}></input>
          {error.confirmPassword && <span className="err">{error.confirmPassword} </span>}
          <button type = "submit" style={{ marginTop: '20px' }}>Submit</button>
        </form>
        <p>Already have an account? <Link to="/">Log in here</Link></p>
      </div>
    </div>
  );
}