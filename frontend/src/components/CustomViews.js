import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from "chart.js";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json';

export default function CustomViews() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();
  const [viewState, setViewState] = useState('idle');
  const [customViews, setCustomViews] = useState([]);

  const customView = async (event) => {
    event.preventDefault();

    setViewState('processing');

    try {
      const response = await axios.get(Constants.API_ADDRESS + '/customviews', {
        params: {
          username: username
        }
      });
      console.log(response);
      setViewState('success');
      setCustomViews(response.data);
      setTimeout(() => {
        setViewState('idle');
      }, 1500);
    } catch (error) {
      console.log(error);
      setViewState('error');
      setTimeout(() => setViewState('idle'), 1500);
    }
  };

  function Views() {
    return (
      <Button block="true" type="submit" onClick={customView}>
        Näkymä 
      </Button>
    );
  }

  return (
    <div>
      <h3>{username} custom views</h3>
      <div>
        <Form className="button-container" onSubmit={Views}>
          <Button block="true" type="submit">
            näytä
          </Button>
        </Form>
      </div>
     
    </div>
  );
}