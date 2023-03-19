import React, { useState } from 'react';

export const Login = (props) => {
    const [uname, setUsername] = useState('');
    const [passwd, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(uname);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={uname} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="" id="username" name="username"/>
            <label htmlFor="password">Password</label>
            <input value={passwd} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here</button>
        </div>
    )
}