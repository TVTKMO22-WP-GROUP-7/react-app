import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords don\'t match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8090/register', {
        username,
        password,
      });
      console.log(response.data); // log the response data to the console
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register new user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">New account: </label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Choose password: </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="confirm-password">Input password again: </label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Log in here</Link></p>
    </div>
  );
}