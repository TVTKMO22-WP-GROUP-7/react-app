import { useState, useEffect } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import './visualisations/Visu.css';
import { Button } from 'react-bootstrap';


export default function CustomViews() {
  const username = localStorage.getItem('username');
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //method to get data from backend
  useEffect(() => {
    axios.get(Constants.API_ADDRESS + '/customviews', {

      params: {
        username: username
      }

    }).then(response => {
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        setData(response.data);
      } else {
        setErrorMessage("No custom views found");
      }

      setData(response.data);

      if (response.data.length === 0) {
        setErrorMessage("No custom views found");
      }
    }).catch(error => {
      if (error.response.status === 404 || error.response.status === 500) {
        setErrorMessage("Something went wrong, return later")
        console.log(error);
      }
    });
  }, []);


  //method to delete custom view
  const deleteCustomView = (id) => {
    axios.delete(Constants.API_ADDRESS + '/customviews/delete', { data: { id: id } })
      .then(response => {
        console.log("OK");
        window.location.reload();
        setTimeout(() => {
        }, 1500);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };


  //handles the data, what to show
  const getCustomViews = () => {
    return data.map((view, index) => {
      const views = [];
      if (view.visu1) {
        views.push(
          <div key={`v${index}-1`}>
          </div>
        );
      }

      if (view.visu2) {
        views.push(
          <div key={`v${index}-2`}>
          </div>
        );
      }

      if (view.visu3) {
        views.push(
          <div key={`v${index}-3`}>
          </div>
        );
      }

      if (view.visu4) {
        views.push(
          <div key={`v${index}-4`}>
          </div>
        );
      }

      if (view.visu5) {
        views.push(
          <div key={`v${index}-5`}>
          </div>
        );
      }

      return (
        <div className="grid-container" key={`view-${index}`}>
          <div className="link">
            <a href={`http://localhost:3000/custom/${view.url}`} target="_blank" rel="noreferrer">Custom view {view.id}</a>
          </div>
          <form className='button-container' >
            <div className="delete-button">
              <Button onClick={() => deleteCustomView(view.id)}>Delete</Button>
            </div>
          </form>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </div>
      <div>
        <h3>Custom views of user: {username}</h3>
        <div>
          {getCustomViews()}
        </div>
      </div>
    </>
  );

}