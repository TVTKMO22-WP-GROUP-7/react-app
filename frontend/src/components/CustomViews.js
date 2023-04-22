import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from "chart.js";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json';
import './visualisations/Visu.css';

import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from "./visualisations/V3";
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';



export default function CustomViews() {
  const username = localStorage.getItem('username');
  const [data, setData] = useState([]);
  const [parallel, setParallel] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get(Constants.API_ADDRESS + '/customviews', {
      params: {
        username: username
      }
    }).then(response => {
      console.log(response.data);
      setData(response.data);
      if (response.data.length === 0) {
        setErrorMessage("No custom views found");
      }
      else {
        let parallelFlag = true;
        response.data.forEach(view => {
          if (!view.parallel) {
            parallelFlag = false;
          }
        });
        setParallel(parallelFlag);
        console.log(parallelFlag);
      }
    }).catch(error => {
      if (error.response.status === 404 || error.response.status === 500) {
        setErrorMessage("Something went wrong, return later")
        console.log(error);
      }
    });
  }, []);

  const deleteCustomView = (id) => {
    axios.delete(Constants.API_ADDRESS + '/customviews/delete', { data: { id: id } })
      .then(response => {
        console.log("OK");
        window.location.reload();
        setSuccessMessage("Custom view deleted");
        setTimeout(() => {
          setSuccessMessage("");
        }, 1500); 
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const getCustomViews = () => {
    return data.map((view, index) => {
      const views = [];
      if (view.visu1) {
        views.push(
          <div key={`v${index}-1`}>
            <V1 textv1={view.textv1} />
            <p className="text">{view.textv1}</p>
          </div>
        );
      }

  const getLayout = () => {
    const containerClass = "grid-container";
    let containerStyle = { display: "flex", flexWrap: "wrap", gap: "20px" };
    let visuContainerStyle = { width: "100%" };

    const isParallel = index => Array.isArray(parallel) && parallel[index];

    if (Array.isArray(parallel) && parallel.every(value => !value)) {
      containerStyle = { display: "block", gap: "20px" };
      visuContainerStyle = { width: "calc(50% - 10px)", display: "inline-block", verticalAlign: "top" };
    } else if (Array.isArray(parallel) && parallel.some(value => value)) {
      containerStyle = { display: "block", gap: "20px" };
      visuContainerStyle = { width: "calc(50% - 10px)", display: "inline-block", verticalAlign: "top" };
    }

    const visuStyle = { width: "100%" };
      if (view.visu5) {
        views.push(
          <div key={`v${index}-5`}>
            <V5 textv5={view.textv5} />
            <p className="text">{view.textv5}</p>
          </div>
        );
      }

      return (
        <div className="grid-container" key={`view-${index}`}>
          <div className="link">
            <a href={`http://localhost:3000/custom/${view.url}`} target="_blank" rel="noreferrer">This custom view can also be found here</a>
          </div>
          {views}
  
          <form className='button-container' >
          <div className="delete-button">
          <Button onClick={() => deleteCustomView(view.id)}>Delete</Button>
    </div>
    {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </form>
          {index === data.length - 1 ? (
            <h2>End of custom views</h2>) : <h1>Custom view changes here to another one</h1>}
        </div>
      );
    });
  };

  const getLayout = () => {
    const containerClass = parallel ? "grid-container parallel" : "grid-container";
    const containerStyle = parallel ? { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" } : { width: "100%" };
    return (
      <div className={containerClass} style={containerStyle}>
        {data.map((view, index) => (
          <div key={`v${index}`} style={{ marginBottom: "20px" }}>
            <div className="link">
              <a href={`http://localhost:3000/custom/${view.url}`} target="_blank" rel="noreferrer">This custom view can also be found here</a>
            </div>
            {isParallel(index) ? (
              <div>
                {view.visu1 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V1 textv1={view.textv1} style={visuStyle} />
                    <p className="text">{view.textv1}</p>
                  </div>
                )}
                {view.visu2 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V2 textv2={view.textv2} style={visuStyle} />
                    <p className="text">{view.textv2}</p>
                  </div>
                )}
                {view.visu3 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V3 textv3={view.textv3} style={visuStyle} />
                    <p className="text">{view.textv3}</p>
                  </div>
                )}
                {view.visu4 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V4 textv4={view.textv4} style={visuStyle} />
                    <p className="text">{view.textv4}</p>
                  </div>
                )}
                {view.visu5 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V5 textv5={view.textv5} style={visuStyle} />
                    <p className="text">{view.textv5}</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                {view.visu1 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V1 textv1={view.textv1} style={visuStyle} />
                    <p className="text">{view.textv1}</p>
                  </div>
                )}
                {view.visu2 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V2 textv2={view.textv2} style={visuStyle} />
                    <p className="text">{view.textv2}</p>
                  </div>
                )}
                {view.visu3 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V3 textv3={view.textv3} style={visuStyle} />
                    <p className="text">{view.textv3}</p>
                  </div>
                )}
                {view.visu4 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V4 textv4={view.textv4} style={visuStyle} />
                    <p className="text">{view.textv4}</p>
                  </div>
                )}
                {view.visu5 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V5 textv5={view.textv5} style={visuStyle} />
                    <p className="text">{view.textv5}</p>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getLayout();
  }, []);

  return (
    <>
      <div>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </div>
      <div>
        <h3>Custom views of user: {username}</h3>
        <div>
          {getLayout()}
        </div>
      </div>
    </>
  );

}

