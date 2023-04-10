
import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import axios from 'axios';
import Constants from './Constants.json';
import Navbar from './Navbar';


export default function DeleteAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  const [input, setInput] = useState({
    username: '',
    password: '',


  });

  const [error, setError] = useState({
    username: '',
    password: '',
  });


  //käyttäjän deletointi
  const handleDelete = async (remove) => {
    remove.preventDefault();

    //Tulostetaan konsoliin username ja password
    console.log(remove.target.username.value);
    console.log(remove.target.password.value);
    console.log(
      "/deleteaccount?username=" +
      remove.target.username.value +
      "&password=" +
      remove.target.password.value
    );
    try {
      const result = await axios.delete(Constants.API_ADDRESS + '/deleteaccount?username=' + remove.target.username.value + "&password=" + remove.target.password.value);
      console.log(result);
      alert("Account deleted"); //Poiston vahvistus käyttäjälle
      navigate("/", { replace: true });

    } catch (error) {
      //Mahdolliset virheilmoitukset
      console.log(error.response);
      if (error.response && error.response.status === 403) {
        setError({ password: error.response.data });
      }
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
      //Ilmoitukset tyhjistä kentistä
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter username";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter your password";
          }
          break;

        default:
          break;

      }return stateObj;
    })
  }




  //Määritellään sivun rakenne
  return (
    <>
      <div className="deleteacc">
        <div>
          <h2>Delete Account</h2>
          <form onSubmit={handleDelete}>
            <div>
              Username <br />
              <input type="text" name="username" placeholder='Enter your username' value={input.username} onChange={onInputChange} onBlur={validateInput} /> <br />
              {error.username && <span className="err">{error.username} </span>}
            </div>
            <div>
              Password <br />
              <input type="password" name="password" placeholder='Enter your password' value={input.password} onChange={onInputChange} onBlur={validateInput} /> <br />
              {error.password && <span className="err">{error.password} </span>}
            </div>
            <button type="submit">Delete account</button> <br />
          </form>

        </div>
        <p><Link to="/">Don't want to delete account, click here </Link></p>
      </div>
    </>
  );
}