import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import axios from "axios";
import Constants from "./Constants.json";

function V2() {

  const [isV2Annual, setIsV2Annual] = useState(true);
  const [isMonthly, setIsMonthly] = useState(false);

    const [v2info, setV2Info] = useState([]);
    const getV2Annual = () => {
        axios.get(Constants.API_ADDRESS + "/v2annual").then((response) =>{
        console.log(response.data);
        setV2Info(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
};
useEffect(() => {
    getV2Annual();
}, []);

    const[V2Monthly, setV2Monthly] = useState([]);
    const getV2Monthly = () => {
        axios.get(Constants.API_ADDRESS + "/v2monthly").then((response) => {
            console.log(response.data);
            setCarbon(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        getV2Monthly();
    }, []);
    
}