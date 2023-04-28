
import React, { useState, useEffect, useRef } from 'react';
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import Constants from "../Constants.json";

import './Visu.css';


function V5() {

    const [data1, setData] = useState([]);
    const [energyData, setEnergyData] = useState([]);
    const [industrialData, setIndustrialData] = useState([]);
    const [wasteData, setWasteData] = useState([]);
    const [afoluData, setAfoluData] = useState([]);
    const [selectedSector, setSelectedSector] = useState();
    const [showDescription, setShowDescription] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const chartRef = useRef();

    //methods to get the data from the API
    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5all")
            .then(response => response.json())
            .then(data => {
                setSelectedSector({ data: data, label: "CO2 emissions all sectors" })
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    setErrorMessage("No connection to the server.");
                if (error.response && (error.response.status === 404 || error.response.status === 500))
                    setErrorMessage("No data found");
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5energy")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEnergyData(data);
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    setErrorMessage("No connection to the server.");
                if (error.response && (error.response.status === 404 || error.response.status === 500))
                    setErrorMessage("No data found");
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5industrial")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIndustrialData(data);
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    setErrorMessage("No connection to the server.");
                if (error.response && (error.response.status === 404 || error.response.status === 500))
                    setErrorMessage("No data found");
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5waste")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWasteData(data);
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    setErrorMessage("No connection to the server.");
                if (error.response && (error.response.status === 404 || error.response.status === 500))
                    setErrorMessage("No data found");
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5afolu")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAfoluData(data);
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    setErrorMessage("No connection to the server.");
                if (error.response && (error.response.status === 404 || error.response.status === 500))
                    setErrorMessage("No data found");
                console.log(error);
            });
    }, []);


    const onClick = (event) => {
        if (selectedSector === null || selectedSector.label === "CO2 emissions all sectors") {
          let element = getElementAtEvent(chartRef.current, event);
          console.log(element);
          if (element[0] !== undefined) {
            if (element[0].index === 0) {
              setSelectedSector({ data: energyData, label: "Energy" });
            } else if (element[0].index === 1) {
              setSelectedSector({ data: industrialData, label: "Industrial" });
            } else if (element[0].index === 2) {
              setSelectedSector({ data: wasteData, label: "Waste" });
            } else if (element[0].index === 3) {
              setSelectedSector({ data: afoluData, label: "Agriculture, Forestry & Land use (Afolu)" });
            }
         }
        }
        return null;
      };


    const data = {
        labels: selectedSector ? selectedSector.data.map(item => item.sector) : [],
        datasets: [
            {
                data: selectedSector ? selectedSector.data.map(item => item.share) : [],
                backgroundColor: [
                    "#9ACD32",
                    "#ADFF2F",
                    "#90EE90",
                    "#00FA9A",
                    "#00FF7F",
                    "#3CB371",
                    "#2E8B57",
                    "#008000",
                    "#00FFFF",
                    "#00CED1",
                    "#48D1CC",
                    "#00BFFF",
                    "#7B68EE",
                    "#B0C4DE",
                    "#4682B4",
                    "#4169E1",
                    "#0000FF",
                    "#0000FF",
                ],
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 0,
                hoverOffset: 20,
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 12
                    }
                }
            }
        },
        title: {
            display: true,
            text: "CO2 emissions by sectors",
            font: {
                size: 20,
            },
            className: 'chart-title',
        },
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    return (
        <div className="content-container">
            <h1>Visualization 5</h1>
            <div>
                <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
            <h2 className="selectedsector-container">{selectedSector ? selectedSector.label : "CO2 emissions all sectors"}</h2>
            <div className="button-container">
                {showDescription ? null : (
                    <button
                        onClick={() => setSelectedSector({ data: data1, label: "CO2 emissions all sectors" })}
                        style={{ display: selectedSector && selectedSector.label !== "CO2 emissions all sectors" ? "block" : "none" }}
                    >
                        Go back
                    </button>
                )}
                <button onClick={toggleDescription} className="btn btn-outline-primary-mt2">
                    {showDescription ? "Hide description" : "Show description"}
                </button>
            </div>
            <div>
                {showDescription ? (
                    <div className="card">
                        <div className="description">
                            <h5>Description</h5>
                            <p>This chart shows the CO2 emissions by sectors. The data is from 2018 and is based on the World Resources Institute (WRI) dataset. By clicking on a sector, you can see the CO2 emissions by country for that sector.</p>
                            <p>To reset the chart, click on the "Go back" button.</p>
                        </div>
                        <h6 className="card-subtitle">Sources: </h6>
                        <p> <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank" rel="noopener noreferrer" className="card-link">Description</a> </p>
                        <p> <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank" rel="noopener noreferrer" className="card-link">Dataset</a> </p>
                    </div>
                ) :
                <div className="chart-container">
                <Doughnut data={data} options={options} ref={chartRef} onClick={onClick} />
                </div>
                }
            </div>
        </div>
    );
} export default V5;