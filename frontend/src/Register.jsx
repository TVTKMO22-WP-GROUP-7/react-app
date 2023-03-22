import React, { useState } from 'react';

export const Register = (props) => {
    const [uname, setUsername] = useState('');
    const [passwd, setPassword] = useState('');
    const [confirmPasswd, setConfirmPassword] = useState('');
    //const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwd !== confirmPasswd) {
            alert('Passwords do not match!');
            return;
        }
        
        fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: uname,
                userPassword: passwd
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('User registered successfully');
                props.onFormSwitch('login');
            } else {
                console.error('Failed to register user');
            }
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={uname} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="" id="username" name="username"/>
                <label htmlFor="password">Password</label>
                <input value={passwd} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input value={confirmPasswd} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="******" id="confirm-password" name="confirm-password"/>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}







