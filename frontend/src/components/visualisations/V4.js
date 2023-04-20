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
    const [showDescription, setShowDescription] = useState(false);

    // Fetch data from the server

    const fetchData = async (hidden) => {
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
                        hidden,
                    };
                });

            // Set chart data
            setChartData({
                labels: years,
                datasets: datasets,
            });

            // Set country names
            const countryNames = Object.keys(data[0] || {}).filter(key => key !== 'year');
            setCountries(countryNames);

            setLoading(false);

        } catch (error) {
            console.error(error);
            setChartData([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(true); // fetch data with hidden datasets
        //drawChartForSelectedCountries();
    }, []);

    //testausmielessä. Voi poistaa
    // const showAllData = async () => {
    //     fetchData(false); // fetch data with visible datasets
    // };


    // Define the chart options
    const chartOptions = {
        responsive: true,
        sacked: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    filter: function (item) {
                        return selectedCountries.includes(item.text);
                    }
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
                    type: "linear",
                    title: {
                        display: true,
                        text: 'CO2 Emissions (tonnes)',

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

    //Draw chart for selected countries
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

    // Reset chart and hide all data
    const resetChart = () => {
        setSelectedCountries([]);
        setLoading(true);
        fetchData(true);
    };

    // Toggle description
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    // Handle country change 
    const handleCountryChange = (event) => {
        const country = event.target.value;
        if (selectedCountries.includes(country)) {
            setSelectedCountries(selectedCountries.filter(c => c !== country));
        } else {
            setSelectedCountries([...selectedCountries, country]);
        }
        event.target.value = "";
    };

    // remove country
    const handleRemoveCountry = (country) => {
        setSelectedCountries((prevSelectedCountries) =>
            prevSelectedCountries.filter((c) => c !== country)
        );
    };

    // Box for selected countries
    const SelectedCountriesBox = ({ selectedCountries, handleRemoveCountry }) => {
        return (
            <div className="selected-countries-box">
                {selectedCountries.map((country, index) => (
                    <div key={index} className="selected-country">
                        {country}
                        <button
                            onClick={() => handleRemoveCountry(country)}
                            className="remove-country"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Visualization 4</h1>
            <div className="button-container">
                {showDescription ? null : (
                    <>
                        <button onClick={drawChartForSelectedCountries}>Draw Line Chart</button>
                        <button onClick={resetChart}>Reset Chart</button>
                    </>
                )}
                <button onClick={toggleDescription}>
                    {showDescription ? 'Hide description' : 'Show description'}
                </button>
            </div>
            <div>
                {showDescription ? (
                    <div className="card mt-4" style={{ width: "24rem" }}>
                        <div className="description">
                            <h5 className="description-title">Description</h5>
                            <p>This chart shows the anthropogenic fossil carbon dioxide (CO2) emissions by country (territorial) starting from 1959. All values in million tonnes</p>
                            <p>Select countries you want to observe and press "Draw Line Chart" button</p>
                            <p>If you want to clear chart. Press "Reset Chart" button</p>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">Sources:</h6>
                        <p>
                            <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021" target="_blank" rel="noopener noreferrer" className="card-link">
                                Description
                            </a>
                        </p>
                        <p>
                            <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D" target="_blank" rel="noopener noreferrer" className="card-link">
                                Download dataset
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="selectedcountry">
                        <select onChange={handleCountryChange}>
                            <option value="">Select countries</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="selectedcountry">
                    <SelectedCountriesBox selectedCountries={selectedCountries}
                        handleRemoveCountry={handleRemoveCountry} /> </div>
                <div className="chart-container">
                    {!showDescription && (
                        <>
                            <Line data={{ labels: chartData.labels, datasets: chartData.datasets }} options={chartOptions} alt="CO2 emissions chart data" style={{ width: "100%" }} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );

} export default V4;
