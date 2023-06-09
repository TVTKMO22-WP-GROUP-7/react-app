import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import Constants from './Constants.json';
import setAuthToken from './setAuthToken';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLoginSubmit = async (e) => {
        setErrorMessage("")
        e.preventDefault()

        if (!username) {
            setErrorMessage('Please enter your username');
        } else if (!password) {
            setErrorMessage('Please enter your password');
        } else {
 
            setLoginState("processing")
            
            await axios.post(Constants.API_ADDRESS + "/login", {
                username: username,
                password: password,
            }).then(response => {
                console.log(response)
                const token = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("username", username)
                setAuthToken(token)
                setLoginState("success");
                setErrorMessage("");
                setTimeout(() => {
                    setLoginState("idle")
                    navigate('/', { replace: true });
                    window.location.reload(false);
                }, 1500);
            }).catch(error => {
            setLoginState("error");
            setTimeout(() => setLoginState("idle"), 2000);
            setErrorMessage("Wrong username or password");
            console.log(error)
        })
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrorMessage("");
        }, 2000);

        return () => clearTimeout(timeout);
    }, [errorMessage]);


    let loginControls = null;
    switch (loginState) {
        case "idle":
            loginControls = <button type="submit">Login</button>
            break;

        case "processing":
            loginControls = <span style={{ color: 'blue' }}>Processing login...</span>
            break;

        case "success":
            loginControls = <span style={{ color: 'green' }}>Login successful</span>
            break;

        case "error":
            loginControls = <span style={{ color: 'red' }}> Login failed!</span>
            break;

        default:
            loginControls = <span style={{ color: 'red' }}>Error</span>
            break;

    }

    return (
        <div>
            <div className='form-container-box'>
                <div className="form-box">
                    <h4>Login to private page</h4>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text"
                            autoFocus
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
                        <div>
                            <span style={{ color: 'red' }}>{errorMessage}</span>
                        </div>
                        <div className="horizontal-center">
                            {loginControls}
                        </div>
                        <p>New user? <Link to="/register">Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}