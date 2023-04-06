import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import Constants from "../Constants.json";
import "./Visu.css"

function V4() {

    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(Constants.API_ADDRESS + "/v4emissions");
                const data = result.data;
        
                console.log('data:', data);
        
                if (!data || data.length === 0) {
                    throw new Error('No data returned from the server');
                }
        
                const years = data?.map((item) => item.year) ?? [];
                console.log('years:', years);

                if (!years || years.length === 0) {
                    throw new Error('No years found in the data');
                }
                
                const datasets = Object.keys(data[0] || {}).filter(key => key !== 'year').map(key => {
                    return {
                        label: key,
                            data: data.map((item) => item[key] * 3.664),
                            fill: false,
                            borderColor: getRandomColor(),
                            tension: 0.1,
                        }
                    });
        
                console.log('datasets:', datasets);
        
                setChartData({
                    labels: years,
                    datasets: datasets,
                });
                setLoading(false);
            } catch (error) {
                console.error(error);
                setChartData([]);
                setLoading(false);
            }
        };        

        fetchData();
    }, []);

    // Define the chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        
    };

    // Generate a random color for each dataset
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="child">
            <h2>CO2 Emissions Over Time</h2>
            <div className="container-v4">

            {loading ? (
                    <p>Loading chart data...</p>
                ) : (
                    <Line data={chartData} options={chartOptions} />
                )}
            </div>
        </div>
    );
};

export default V4;
