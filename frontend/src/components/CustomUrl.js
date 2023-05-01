import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from "chart.js";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json';

import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from "./visualisations/V3";
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';

import { useParams } from 'react-router-dom';

export default function CustomUrl() {
  const { url } = useParams();

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [parallel, setParallel] = useState();
  const [urlParam, setUrlParam] = useState(url);
  const [errorMessage, setErrorMessage] = useState("");

  //method to get data from backend
  const getData = () => {
    const result = axios.get(`${Constants.API_ADDRESS}/custom/${urlParam}`, {
    }).then(response => {
      console.log(result)
      console.log(response.data);
      setData(response.data);
      if (response.data.length === 0) {
        setErrorMessage("No custom views found");
      }
      else {
        setUsername(response.data[0].username);
        setParallel(response.data[0].parallel);
      }
    }).catch(error => {
      if (error.response.status === 404 || error.response.status === 500) {
        setErrorMessage("Something went wrong, return later")
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log("Parallel is ",parallel);
  }, [parallel]);

  

//handles the data, what to show and what layout
  const getLayout = () => {
    const containerClass = parallel ? "grid-container custom" : "grid-container";
    let containerStyle = parallel ? { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" } : { width: "100%" };
    let visuContainerStyle = { width: "100%" };
    
    if (parallel) {
      containerStyle = { display: "block", gap: "20px" };
      visuContainerStyle = { width: "calc(50% - 10px)", display: "inline-block", verticalAlign: "top" };
    }
    
    const visuStyle = { width: "100%" };
  
    return (
      <div className={containerClass} style={containerStyle}>
        {data.map((view, index) => (
          <div key={`v${index}`} style={{ marginBottom: "20px" }}>
            {parallel ? (
              <div>
                {view.visu1 && (
                  <div className="vis-container" style={visuContainerStyle}>
                    <V1 textv1={view.textv1} style={visuStyle} />
                    <p className="text">{view.textv1}</p>
                    <p>{parallel}</p>
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
        {getLayout()}
      </div>
    </>

  );
}
