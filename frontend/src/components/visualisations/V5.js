import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
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

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5all")
            .then(response => response.json())
            .then(data => {
                setSelectedSector({ data: data, label: "All sectors" })
                console.log(data);
                setData(data);
            }
            );
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5energy")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEnergyData(data);
            }
            );
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5industrial")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIndustrialData(data);
            }
            );
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5waste")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWasteData(data);
            }
            );
    }, []);

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5afolu")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAfoluData(data);
            }
            );
    }, []);


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
        aspectRatio: 5,
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

    return (
        <div className="button-container">
            <button onClick={() => setSelectedSector({ data: data1, label: "All sectors" })}>All sectors</button>
            <button onClick={() => setSelectedSector({ data: energyData, label: "Energy" })}>Energy</button>
            <button onClick={() => setSelectedSector({ data: industrialData, label: "Industrial Processes and Product Use" })}>Industrial Processes and Product Use</button>
            <button onClick={() => setSelectedSector({ data: wasteData, label: "Waste" })}>Waste</button>
            <button onClick={() => setSelectedSector({ data: afoluData, label: "Agriculture, Forestry & Land Use" })}>AFOLU</button>
            <div className="containter-fluid">
                <h2>{selectedSector ? selectedSector.label : "All sectors"}</h2>
            </div>
            <div className="container-fluid">
                <Doughnut data={data} options={options} />
            </div>
            <div className="card mt-4" style={{ width: "24rem" }}>
                <div className="card-body">
                    <h5 className="card-title>">Description</h5>
                    <p ClassName="card-text">DESCRIPTION HERE</p>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Sources: </h6>
                <p> <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank" rel="noopener noreferrer" className="card-link">Description</a></p>
                <p> <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank" rel="noopener noreferrer" className="card-link">Dataset</a></p>
            </div>

        </div>
    );
} export default V5;