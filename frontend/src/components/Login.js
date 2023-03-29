import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import Constants from './Constants.json';

export default function Login() {

    const [username, setUser] = useState("");
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
            axios.defaults.headers.common["Authorization"] = 'Bearer ${token}'
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
                    <h4>Login</h4>
                    <form onSubmit={handleLoginSubmit}>
                    <Form.Group>
                        <Form.Control
                            autoFocus
                            id="Loginid"
                            placeholder="Username"
                            type="username"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            id="loginPassword"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <br></br>
                    <Button block="true" type="submit" id="loginin">Login</Button>
                    <Link to="register"><button>Register here</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}