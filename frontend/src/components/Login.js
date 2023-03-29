import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from './Constants.json';

export default function Login() {

    const navigate = useNavigate();

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

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(Constants.API_ADDRESS + "/login", {
                username: input.username,
                password: input.password,
            });

            if (response.data.success) {
                // The user is authenticated, navigate to the default view
                navigate("/", { replace: true });
            } else {
                // The user is not authenticated, display an error message
                setError({ username: "Invalid username or password" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> 
            <h1>Climate app, some other name ?? </h1>
            <p>This is the homepage of the page where you can log in, some description about the page?? </p>
            <div className="login-container">
                <div className="login">
                    <h4>Login</h4>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="username" placeholder="Enter username" value={input.username} onChange={onInputChange} onBlur={validateInput}></input>
                        {error.username && <span className="err">{error.username} </span>}
                        <input type="password" name="password" placeholder="Enter password" value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                        {error.password && <span className="err">{error.password} </span>}
                        <Link to="defaultview"> <button>Log in</button></Link>
                    </form>
                </div>
            </div>
            <br/>
            <Link to="register"><button>Register here</button></Link>     
        </div>
    )
}