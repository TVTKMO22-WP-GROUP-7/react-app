import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import axios from "axios";
import Constants from "../Constants.json";

function V5() {

    const [chartData, setChartData] = useState({});

    const [data1, setData] = useState([]);
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
        fetch(Constants.API_ADDRESS + "/v5sub")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData2(data);
            }
            );
    }, []);

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
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
            ],
          }
        ]
      }

      const sub = {
        labels: data2.map(label => label.sector),
        datasets: [
            {
                data: data2.map(label => label.share),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                ],
            }
        ]
    }

    const subf = {
        labels: data3.map(label => label.sector),
        datasets: [
            {
                data: data3.map(label => label.share),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                ],
            }
        ]
    }


    const options = {
        responsive: true,
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
            <div className="container-fluid">
                <Doughnut data={data} options={options} height={400} width={600}/>
                <Doughnut data={sub} options={options} height={400} width={600}/>
                <Doughnut data={subf} options={options} height={400} width={600}/>
            </div>
        </div>
    );
} export default V5;