import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import Constants from "../Constants.json";
import "./Visu.css"

function V4() {

    // Define the chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
      });
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    // Fetch data from the server
    const fetchData = async () => {
        try {
            const result = await axios.get(Constants.API_ADDRESS + "/v4emissions");
            const data = result.data;
            
            // Check if data is returned from the server
            if (!data || data.length === 0) {
                throw new Error('No data returned from the server');
            }

            // Extract years from data
            const years = data?.map((item) => item.year) ?? [];

            // Check if years are found in the data
            if (!years || years.length === 0) {
                throw new Error('No years found in the data');
            }
            // Extract countries from data and filter out the year column
            const datasets = Object.keys(data[0] || {})
                .filter((key) => key !== "year")
                .map((key) => {
                    return {
                    label: key,
                    data: data.map((item) => item[key] * 3.664),
                    borderColor: getRandomColor(),
                    fill: false,
                    hidden: true,
                    };
                });

                // Set chart data
                setChartData({
                    labels: years,
                    datasets: datasets,
                });

                setLoading(false);

                // Set country names
                const countryNames = Object.keys(data[0] || {}).filter(key => key !== 'year');
                setCountries(countryNames);

        } catch (error) {
            console.error(error);
            setChartData([]);
            setLoading(false);
        }
    };  

    // Fetch data when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    //Tämä pitää jollain tavalla liittää fetchdataan koska ainoa ero fetchdataan on että hidden on false!
    //Muutos voi mahdollisesti tapahtua const showAll joka on viimeisenä koodissa 
    //show all the data 
    const showAllData = async () => {
        try {
            const result = await axios.get(Constants.API_ADDRESS + "/v4emissions");
            const data = result.data;
            
            // Check if data is returned from the server
            if (!data || data.length === 0) {
                throw new Error('No data returned from the server');
            }

            // Extract years from data
            const years = data?.map((item) => item.year) ?? [];

            // Check if years are found in the data
            if (!years || years.length === 0) {
                throw new Error('No years found in the data');
            }
            // Extract countries from data and filter out the year column
            const datasets = Object.keys(data[0] || {})
                .filter((key) => key !== "year")
                .map((key) => {
                    return {
                    label: key,
                    data: data.map((item) => item[key] * 3.664),
                    borderColor: getRandomColor(),
                    fill: false,
                    hidden: false,
                    };
                });

                // Set chart data
                setChartData({
                    labels: years,
                    datasets: datasets,
                });

                setLoading(false);

                // Set country names
                const countryNames = Object.keys(data[0] || {}).filter(key => key !== 'year');
                setCountries(countryNames);

        } catch (error) {
            console.error(error);
            setChartData([]);
            setLoading(false);
        }
    };     

    // Define the chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'CO2 Emissions Over Time',
                font: {
                    size: 20,
                },                  
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'CO2 Emissions (tonnes)',
                    font: {
                        size: 16,
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    font: {
                        size: 16,
                    },
                },
            },
        },

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

    // Draw chart for selected countries (multiple) not working correctly! only shows one country at time
    const drawChartForSelectedCountries = () => {
        const selecteddatasets = chartData.datasets.map((dataPoint) => {
            if (selectedCountries.includes(dataPoint.label)) {
              return {
                ...dataPoint,
                hidden: false,
              };
            } else {
              return {
                ...dataPoint,
                hidden: true,
              };
            }
            
        });
   
        // Set chart data 
        //Saattaa olla ylimääräistä sekoilua tässäkin
        setChartData((prevChartData) => ({
            labels: prevChartData.labels,
            datasets: selecteddatasets,
          }));
            
            // Set selected countries
            setSelectedCountries(
                selecteddatasets
                .filter((dataPoint) => !dataPoint.hidden)
                .map((dataPoint) => dataPoint.label)
                );
                console.log(selectedCountries);
                
    };

      // Clear selected country from chart and dropdown
    const clearSelectedCountry = (country) => {
        setSelectedCountries(selectedCountries.filter(c => c !== country));
        const selectedCountriesData = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => {
            if (dataset.label === country) {
                return {...dataset, hidden: true,};
            } else {
                return dataset;
            }
            })
        };
        setChartData(selectedCountriesData);
    };

    // Reset chart and hide all data
    const resetChart = () => {
        setLoading(true);
        fetchData();
    };

    // Show all data in chart
    const showAll = () => {
        setLoading(true);
        showAllData();
    };

    return (
        <div className="child">
            <h2>CO2 Emissions Over Time</h2>
            <div>

                <select onChange={(e) => setSelectedCountries(Array.from(e.target.selectedOptions).map((option) => option.value))}>
                    <option value="">Select countries</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                <button onClick={drawChartForSelectedCountries}>Draw Line Chart</button>
                <button onClick={resetChart}>Reset Chart</button>
                <button onClick={showAll}>Show all data</button>
                {selectedCountries.length > 0 && (
                    <div>
                        Selected Countries: {selectedCountries.map((country) => (
                            <button key={country} onClick={() => clearSelectedCountry(country)}>{country} x</button>
                        ))}
                    </div>
                )}
            </div>
            <div className="container-v4">
                {loading ? (
                    <p>Loading chart data...</p>
                ) : (
                    <>
                        <Line data={{ labels: chartData.labels, datasets: chartData.datasets }} options={chartOptions} />
                    </>
                )}
            </div>
        </div>
    );
};

export default V4;
