import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import Constants from "../Constants.json";


function V3() {

    const [showDescription, setShowDescription] = useState(false);

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
                console.log(error);
            });
    };

    useEffect(() => {
        getGlobalData();
    }, []);


    const [carbonData, setCarbonData] = useState({})
    const getCarbonData = () => {
        axios.get(Constants.API_ADDRESS + "/v3carbon").then((response) => {
            console.log(response.data);
            setCarbonData(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getCarbonData();
    }, []);


    const [eventData, setEventData] = useState({})
    const getEventData = () => {
        axios.get(Constants.API_ADDRESS + "/v3event").then((response) => {
            console.log(response.data);
            setEventData(response.data);
        })
            .catch((error) => {
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
                data: eventData,
                borderColor: "rgb(255, 213, 0)",
                backgroundColor: "rgb(255, 213, 0)",
                parsing: {
                    xAxisKey: "yearE",
                    yAxisKey: "event",
                },
                pointRadius: 6,
                pointStyle: 'triangle',
                xAxisID: "x1",
            },

        ],
    };

    const optionsV3 = {
        responsive: true,
        sacked: false,
        plugins: {
            legend:
            {
                position: "top",
            },

            title: {
                display: true,
                text: "Evolution of global temperature over the past two million years",
                font: {
                    size: 20
                },
            },
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
            x1: {
                display: false,
            }


        },

    };


    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };


    return (
        <div>
            <h1>Visualization 3</h1>
            <div className="button-container">
                <button onClick={toggleDescription} className="btn btn-outline-primary-mt2">{showDescription ? "Hide description" : "Show description"}</button>
            </div>
            <div style={{ width: "24rem" }}>
            <div>
            <h5 className="card-title" >Description</h5>
          <p className="card-text">This chart shows Evolution of global temperature over the past two million years.</p>
          <p> You can also see some of important milestones about human evolution that are related to Co2 and temperature changes.</p>
            <div className="chart-container">
                {showDescription ? <div className="card mt-4" style={{ width: "24rem" }}>
                    <div className="description">
                        <h5 className="description-title">Description</h5>
                        <p className="description-text">This chart shows Evolution of global temperature over the past two million years.</p>
                        <p>You can also see some of important milestones about human evolution that are related to Co2 and temperature changes.</p>
                    </div>
                    <h6 className="description-sources">Sources:</h6>
                    <p> <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf/" target="_blank" rel="noopener noreferrer" className="card-link">Description </a></p>
                    <p> <a href="http://carolynsnyder.com/publications.php" target="_blank" rel="noopener noreferrer" className="card-link">Datasets</a></p>
                    <p> <a href="https://www.southampton.ac.uk/~cpd/history.html" target="_blank" rel="noopener noreferrer" className="card-link">Human Evolution</a></p>
                </div> : <Line data={data} options={optionsV3} alt="chart"></Line>}
            </div>
        </div>
    );
}export default V3;