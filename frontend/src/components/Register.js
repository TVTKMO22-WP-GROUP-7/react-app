import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';

export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (event) => {
    if(password !== confirmPassword){
      alert("Password and Confirm Password does not match")
    }
    else if(password === ""){
      alert("Password can't be empty")
    } else {
      event.preventDefault();   
      axios.post(Constants.API_ADDRESS+ "/register", {},
      {
        params: {
          username,
          password
        }
      }).then(response => {
        console.log(response)
        navigate("/", {replace:true});
      }).catch(error => {
        alert("User already exist. Please pick another username")
        console.log(error)
        })
    }    
  }

  return (
    <div className="register-container">
      <div className="register">
        <h4>Register new user</h4>
        <form onSubmit = {handleRegisterSubmit}>
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
          <button type = "submit" style={{ marginTop: '20px' }}>Submit</button>
        </form>
        <p>Already have an account? <Link to="/">Log in here</Link></p>
      </div>
    </div>
  );
}