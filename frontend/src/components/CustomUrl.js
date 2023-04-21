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
  const [parallel, setParallel] = useState(true);
  const [urlParam, setUrlParam] = useState(url);
  const [errorMessage, setErrorMessage] = useState("");

  const getData = () => {
    const result = axios.get(`${Constants.API_ADDRESS}/custom/${urlParam}`, {
    }).then(response => {
      console.log(result)
      console.log(response.data);
      setData(response.data);
      setParallel(response.data.parallel);
      console.log(parallel);
      if (response.data.length === 0) {
        setErrorMessage("No custom views found");
      }
      else {
        setUsername(response.data[0].username);
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

      if (view.visu2) {
        views.push(
          <div key={`v${index}-2`}>
            <V2 textv2={view.textv2} />
            <p className="text">{view.textv2}</p>
          </div>
        );
      }

      if (view.visu3) {
        views.push(
          <div key={`v${index}-3`}>
            <V3 textv3={view.textv3} />
            <p className="text">{view.textv3}</p>
          </div>
        );
      }

      if (view.visu4) {
        views.push(
          <div key={`v${index}-4`}>
            <V4 textv4={view.textv4} />
            <p className="text">{view.textv4}</p>
          </div>
        );
      }

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
          {views}
        </div>
      );
    });
  };

  const getLayout = () => {
    const containerClass = parallel ? "grid-container parallel" : "grid-container";
    return (
      <div className={containerClass}>
        <h3>View was made by: {username}</h3>
        {getCustomViews()}
      </div>
    );
  }


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

