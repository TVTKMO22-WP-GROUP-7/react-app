import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from './Constants.json';

export default function DeleteAccount() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: '',
    password: '',

  });
  const [error, setError] = useState({
    username: '',
    password: '',
  });



  const handleDelete = async (remove) => {
    remove.preventDefault();
    try {
      const result = await axios.delete(Constants.API_ADDRESS + '/deleteaccount?username=' + remove.target.username.value + "&password=" + remove.target.password.value + ".");
      console.log(result);
      navigate("/", { replace: true });

    } catch (error) {
      console.log(error);

      //virhetilanteet tähän.
    }
  }
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
            stateObj[name] = "Please enter your current password";
          }
          break;
      }return stateObj;
    })
  }
  return (
    <div >
      <div >
        <h2>Delete Account</h2>
        <form onSubmit={handleDelete}>
          <div>
            Username <br />
            <input type="text" name="username" placeholder='Enter your username' value={input.username} onChange={onInputChange} onBlur={validateInput} /> <br />
            {error.username && <span className="err">{error.username} </span>}
          </div>
          <div>
            Password <br />
            <input type="text" name="password" placeholder='Enter your password' value={input.password} onChange={onInputChange} onBlur={validateInput} /> <br />
            {error.password && <span className="err">{error.password} </span>}
          </div>
          <button type="submit">Delete account</button> <br />
        </form>

      </div>
    </div>
  );
}