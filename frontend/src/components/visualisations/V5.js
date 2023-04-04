import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import Constants from "../Constants.json";

function V5() {

    const [data1, setData] = useState([]);
    const [energyData, setEnergyData] = useState([]);
    const [industrialData, setIndustrialData] = useState([]);
    const [wasteData, setWasteData] = useState([]);
    const [afoluData, setAfoluData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);


    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5all")
            .then(response => response.json())
            .then(data => {
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



   /* useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5sub")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData2(data);
            }
            );
    }, []);*/

    useEffect(() => {
        fetch(Constants.API_ADDRESS + "/v5subfurther")

            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData3(data);
            }
            );
    }, []);

    const data = {
        labels: data1.map(item => item.sector),
        datasets: [
            {
                data: data1.map(item => item.share),
                backgroundColor: [
                    "#9ACD32",
                    "#ADFF2F",
                    "#228B22",
                    "#90EE90",
                ],
            }
        ]
    }

    const energy = {
        labels: energyData.map(label => label.sector),
        datasets: [
            {
                data: energyData.map(label => label.share),
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
    }

    const industrial = {
        labels: industrialData.map(label => label.sector),
        datasets: [
            {
                data: industrialData.map(label => label.share),
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
    }


    const waste = {
        labels: wasteData.map(label => label.sector),
        datasets: [
            {
                data: wasteData.map(label => label.share),
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
    }

    const afolu = {
        labels: afoluData.map(label => label.sector),
        datasets: [
            {
                data: afoluData.map(label => label.share),
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
    }



    /*const sub = {
        labels: data2.map(label => label.sector),
        datasets: [
            {
                data: data2.map(label => label.share),
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
                ],
            }
        ]
    }*/

    const subf = {
        labels: data3.map(label => label.sector),
        datasets: [
            {
                data: data3.map(label => label.share),
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
                ],
            }
        ]
    }

    const options = {
        responsive: true,
        aspectRatio: 5,
        elements: {
            arc: {
                borderWidth: 0
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
            }
        }
    }

    return (
        <div className="child">
            <div className="container-fluid" width={1000}>
                <Doughnut data={data} options={options} height={400} width={600} />
                <Doughnut data={energy} options={options} height={400} width={600} />
                <Doughnut data={industrial} options={options} height={400} width={600} />
                <Doughnut data={waste} options={options} height={400} width={600} />
                <Doughnut data={afolu} options={options} height={400} width={600} />
                <Doughnut data={subf} options={options} height={400} width={600} />
            </div>
        </div>
    );
} export default V5;