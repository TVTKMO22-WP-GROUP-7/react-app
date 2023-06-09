import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import axios from "axios";
import Constants from "../Constants.json";
import './Visu.css';

function V1() {

  const [isAnnual, setIsAnnual] = useState(true);
  const [isReconstruction, setIsReconstruction] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  //methods to get all necessary data from the backend
  const [data1, setData] = useState([]);
  const getData = () => {
    axios.get(Constants.API_ADDRESS + "/v1annualglobal").then((response) => {
      console.log(response.data);
      setData(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [data2, setData2] = useState([]);
  const getData2 = () => {
    axios.get(Constants.API_ADDRESS + "/v1annualnorth").then((response) => {
      console.log(response.data);
      setData2(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData2();
  }, []);

  const [data3, setData3] = useState([]);
  const getData3 = () => {
    axios.get(Constants.API_ADDRESS + "/v1annualsouth").then((response) => {
      console.log(response.data);
      setData3(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData3();
  }, []);

  const [data4, setData4] = useState([]);
  const getData4 = () => {
    axios.get(Constants.API_ADDRESS + "/v1monthlyglobal").then((response) => {
      console.log(response.data);
      setData4(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData4();
  }, []);

  const [data5, setData5] = useState([]);
  const getData5 = () => {
    axios.get(Constants.API_ADDRESS + "/v1monthlynorth").then((response) => {
      console.log(response.data);
      setData5(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData5();
  }, []);

  const [data6, setData6] = useState([]);
  const getData6 = () => {
    axios.get(Constants.API_ADDRESS + "/v1monthlysouth").then((response) => {
      console.log(response.data);
      setData6(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };
  useEffect(() => {
    getData6();
  }, []);

  const [data7, setData7] = useState([]);
  const getData7 = () => {
    axios.get(Constants.API_ADDRESS + "/v1reconstruction").then((response) => {
      console.log(response.data);
      setData7(response.data);
    })
      .catch((error) => {
        if (error.message === "Network Error")
          setErrorMessage("No connection to the server.");
        if (error.response && (error.response.status === 404 || error.response.status === 500))
          setErrorMessage("No data found");
        console.log(error);
      });
  };

  useEffect(() => {
    getData7();
  }, []);


  const data = {
    datasets: [
      {
        label: "Global annual anomalies",
        data: data1,
        borderColor: "rgb(0, 0, 139)",
        backgroundColor: "rgb(0, 0, 139)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "global_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: "North annual anomalies",
        data: data2,
        borderColor: "rgb(0, 139, 139)",
        backgroundColor: "rgb(0, 139, 139)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: "South annual anomalies",
        data: data3,
        borderColor: "rgb(46, 139, 87)",
        backgroundColor: "rgb(46, 139, 87)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "southern_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
  const monthly = {
    datasets: [
      {
        label: "Global monthly anomalies",
        data: data4,
        borderColor: "rgb(0, 0, 139)",
        backgroundColor: "rgb(0, 0, 139)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "global_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: "North monthly anomalies",
        data: data5,
        borderColor: "rgb(0, 139, 139)",
        backgroundColor: "rgb(0, 139, 139)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: "South monthly anomalies",
        data: data6,
        borderColor: "rgb(46, 139, 87)",
        backgroundColor: "rgb(46, 139, 87)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "southern_anomaly",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
  const reconstruction = {
    datasets: [
      {
        label: "Reconstruction",
        data: data7,
        borderColor: "rgb(0,139,139)",
        backgroundColor: "rgb(0,139,139)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "t",
        },
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    sacked: false,
    maintainAspectRatio: false,
    plugins: {
      legend:
      {
        position: "top",
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies from January 1850 onwards " + (isAnnual ? "(yearly)" : "(mounthly)"),
        font: {
          size: 20
        }
      },
    },
    scales: {
      x:
      {
        type: 'time',
        time: {
          unit: isAnnual ? "year" : "month",
        }
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Temperature anomaly (°C)",
        },
      },
    },
  };

  const ReconstructionOptions = {
    responsive: true,
    stacked: false,
    maintainAspectRatio: false,
    plugins: {
      legend:
      {
        position: "top",
      },
      title: {
        display: true,
        text: "Northern Hemisphere 2,000-year temperature reconstruction (starting from year 1)",
        font: {
          size: 20
        }
      }
    },
    scales: {
      x:
      {
        type: 'linear',
        time: {
          unit: "year",
        },
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Temperature reconstruction (°C)",
        },
      },
    },
  };


  //function to change data
  function changeData() {
    if (isAnnual && !isReconstruction) {
      return data;
    }
    else if (isAnnual && isReconstruction) {
      return reconstruction;
    }
    else if (!isAnnual && !isReconstruction) {
      return monthly;
    }
    else {
      return reconstruction;
    }
  }

  //function to change options
  function changeDataOptions() {
    if (isAnnual && !isReconstruction) {
      return options;
    }
    else if (isAnnual && isReconstruction) {
      return ReconstructionOptions;
    }
    else if (!isAnnual && !isReconstruction) {
      return options;
    }
    else {
      return ReconstructionOptions;
    }
  }

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }


  return (
    <div className="content-container">
      <h1>Visualization 1</h1>
      <div>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </div>
      <div className="button-container">
        {showDescription ? null :
          (!isReconstruction &&
            <button onClick={() => setIsAnnual(!isAnnual)} className="btn btn-outline-primary-mt2">
              {isAnnual ? "Show data monthly" : "Show data yearly"}
            </button>)
        }
        {showDescription ? null :
          <button onClick={() => setIsReconstruction(!isReconstruction)} className="btn btn-outline-primary-mt2">
            {isReconstruction ? "Hide temperature reconstruction" : "Show temperature reconstruction"}
          </button>
        }
        <button onClick={toggleDescription} className="btn btn-outline-primary-mt2">
          {showDescription ? "Hide description" : "Show description"}
        </button>
      </div>
      <div>
        {showDescription ? (
          <div className="card">
            <div className="description">
              <h5>Description</h5>
              <p>This chart shows the global surface temperature anomalies from January 1850 onwards. The chart shows the global, northern and southern hemisphere anomalies.</p>
              <p> The chart also presents a temperature reconstruction of the Northern Hemisphere for the past 2,000 years.</p>
              <p> If you want to see the temperature reconstruction data press the show 'Temperature Reconstruction-button'</p>
            </div>
            <h6 className="card-subtitle">Sources:</h6>
            <p> <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/" target="_blank" rel="noopener noreferrer" className="card-link">HardCruts5 Data </a></p>
            <p> <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005" target="_blank" rel="noopener noreferrer" className="card-link">2000 Year Northern Hemisphere Temperature Reconstruction</a></p>
          </div>
        ) : (
          <div className="chart-container">
            <Line data={changeData()} options={changeDataOptions()} alt="Anomaly data chart" />
          </div>
        )}
      </div>
    </div>
  );
}
export default V1;