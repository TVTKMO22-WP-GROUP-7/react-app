import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from './Constants.json';

export default function Login() {

    const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log(
        "/login?username=" +
        event.target.username.value +
        "&password=" +
        event.target.password.value
    );


    try {
      const result = await axios.post(Constants.API_ADDRESS+ "/login?username=" + event.target.username.value + "&password=" + event.target.password.value+".");
      console.log(result);
      navigate("/", {replace:true});
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 403) {
        setError({username: error.response.data});
      } else {
        console.log(error);
      }
    }
  };

    const [input, setInput] = useState({
        username: '',
        password: '',
      });
    
      const [error, setError] = useState({
        username: '',
        password: '',
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
              break;

            default:
              break;
          }
          return stateObj;
        });
      }

    return (
        <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> 
            <h1>Climate app, some other name ?? </h1>
            <p>This is the homepage of the page where you can log in, some description about the page?? </p>
            <div className="login-container">
                <div className="login">
                    <h4>Login</h4>
                    <form onSubmit = {handleLogin}>
                    <input type="text" name="username" placeholder="Enter username" value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
                    {error.username && <span className="err">{error.username} </span>}
                    <input type="password" name="password" placeholder="Enter password" value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                    {error.password && <span className="err">{error.password} </span>}
                    </form>
                </div>
                </div>
                <br/>
            <Link to="defaultview"><button>Log in</button></Link>
            <Link to="register"><button>Register here</button></Link>     
        </div>
    )
}