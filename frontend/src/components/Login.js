import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import Constants from './Constants.json';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        axios.post(Constants.API_ADDRESS + "/login", {},
            {
                params: {
                    username,
                    password
                }
            }).then(response => {
                const token = response.data
                localStorage.setItem("token", token)
                setAuthToken(token)
                console.log(token)
                navigate('/defaultview')
                window.location.reload(false);
            }).catch(error => {
                alert("Wrong username or password")
                console.log(error)
            })
    }

    const setAuthToken = (token) => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            return true
        }
        else{
             console.log("Invalid token")
             return false
        }
    }

    return (
        <div>
            <div className='login-container'>
                <div className="login">
                    <h4>Login to private page</h4>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text"              
                            autoFocus
                            name="username" 
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}>                        
                        </input>
                        <input type="password" 
                            name="password" 
                            placeholder="Enter Password"                            
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>                       
                        </input>
                        <button type="submit" style={{ marginTop: '20px' }}>Login</button>
                        <br></br>
                        <p>New user? <Link to="/register">Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}