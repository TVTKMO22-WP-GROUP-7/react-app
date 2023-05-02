import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import Constants from "../Constants.json";
import './Visu.css';


function V3() {


    const [showDescription, setShowDescription] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [globalData, setGlobalData] = useState({});

    const getGlobalData = () => {
        axios.get(Constants.API_ADDRESS + "/v3global").then((response) => {
            console.log(response.data);

            // Multiply yearG by 1000
            const modifiedData = response.data.map((item) => ({
                ...item,
                yearG: item.yearG * 1000,
            }));

            setGlobalData(modifiedData);
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
        getGlobalData();
    }, []);


    const [carbonData, setCarbonData] = useState({});
    const getCarbonData = () => {
        axios.get(Constants.API_ADDRESS + "/v3carbon").then((response) => {
            console.log(response.data);

            // yearC by 1000
            const modifiedData3 = response.data.map((item) => ({
                ...item,
                yearC: item.yearC / 1000,
            }));

            setCarbonData(modifiedData3);
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
        getCarbonData();
    }, []);


    const [EventData, setEventData] = useState({});
    const getEventData = () => {
        axios.get(Constants.API_ADDRESS + "/v3event").then((response) => {
            console.log(response.data);

            // Multiply yearG by 1000
            const modifiedData2 = response.data.map((item) => ({
                ...item,
                years_ago: item.years_ago * 100,
            }));

            setEventData(modifiedData2);
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
        getEventData();
    }, []);


    const data = {
        datasets: [
            {
                showLine: true,
                label: "Carbondata",
                type: 'line',
                data: carbonData,
                borderColor: "rgb(255, 0, 0)",
                backgroundColor: "rgb(255, 0, 0)",
                parsing: {
                    xAxisKey: "yearc",
                    yAxisKey: "carbondata",
                },
                pointRadius: false,
                xAxisID: "x",
            },
            {
                label: "Globaldata",
                type: 'line',
                data: globalData,
                borderColor: "rgb(7, 0, 0)",
                backgroundColor: "rgb(7, 0, 0)",
                parsing: {
                    xAxisKey: "yearG",
                    yAxisKey: "global",
                },
                pointRadius: false,
                yAxisID: "y1",
                xAxisID: "x",


            },
            {
                label: "Event",
                showLine: false,
                data: EventData,
                borderColor: "rgb(255, 213, 0)",
                backgroundColor: "rgb(255, 213, 0)",
                parsing: {
                    xAxisKey: "years_ago",
                    yAxisKey: "yearE",
                },
                pointRadius: 6,
                pointStyle: 'triangle',
                xAxisID: "x",
                yAxisID: "y2"

            },

        ],
    };

    const optionsV3 = {
        responsive: true,
        maintainAspectRatio: false,
        stacked: false,
        plugins: {
            legend:
            {
                position: "top",
            },
            tooltips: {
                label: function (context) {

                    if (context.dataset.label === "event") {
                        return context.raw.event;
                    } else {
                        return context.formattedValue;
                    }
                },
                title: function (context) {
                    if (context?.[0]?.raw.years_ago === undefined && context?.[0]?.raw.yearC != null && context?.[0]?.raw.yearG === null) {
                        return "Year " + context[0].label;
                    }
                    if (context?.[0]?.raw.years_ago === undefined && context?.[0]?.raw.yearG != null && context?.[0]?.raw.yearC != null) {
                        return "Year " + context[0].label;
                    }
                    else if (context.length > 0) {
                        return context[0].raw.years_ago + " years ago";
                    }

                }
            },

            title: {
                display: true,
                text: "Evolution of global temperature over the past two million years",
                font: {
                    size: 20
                },
            },
            fullSize: true,

        },

        scales: {
            y:
            {
                type: 'linear',
                title: {
                    display: true,
                    text: "Carbon",
                },
                position: "left",



            },
            y1: {
                type: "linear",
                title: {
                    display: true,
                    text: "Global",
                },
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },

            },


            x: {
                type: "linear",
                time: {
                    unit: "year"
                },

                title: {
                    display: true,
                    text: 'Thousands years before present'
                },

                reverse: true,
            },
            y2: {
                display: false,
            },

        },
    };


    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };


    return (
        <div className="content-container">
            <h1>Visualization 3</h1>
            <div>
                <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
            <div className="button-container">
                <button onClick={toggleDescription} className="btn btn-outline-primary-mt2">{showDescription ? "Hide description" : "Show description"}</button>
            </div>
            <div>
                {showDescription ? (
                    <div className="card">
                        <div className="description">
                            <h5>Description</h5>
                            <p>This chart shows Evolution of global temperature over the past two million years.</p>
                            <p>You can also see some of important milestones about human evolution that are related to Co2 and temperature changes.</p>
                        </div>
                        <h6 className="card-subtitle">Sources:</h6>
                        <p> <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf/" target="_blank" rel="noopener noreferrer" className="card-link">Description </a></p>
                        <p> <a href="http://carolynsnyder.com/publications.php" target="_blank" rel="noopener noreferrer" className="card-link">Datasets</a></p>
                        <p> <a href="https://www.southampton.ac.uk/~cpd/history.html" target="_blank" rel="noopener noreferrer" className="card-link">Human Evolution</a></p>
                    </div>
                ) : (
                    <div className="chart-container">
                        <Line data={data} options={optionsV3} alt="chart" />
                    </div>
                )}
            </div>
        </div>

    );
}; export default V3;