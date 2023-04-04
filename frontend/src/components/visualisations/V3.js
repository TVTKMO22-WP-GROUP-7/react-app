import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Constants from "../Constants.json";

function V3() {
    const [event, setEvent] = useState(true);

    const [global, setGlobal] = useState([]);
    const getGlobal = () => {
        axios.get(Constants.API_ADDRESS + "/v3global").then((response) => {
            console.log(response.data);
            setGlobal(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getGlobal();
    }, []);

    const [carbon, setCarbon] = useState([]);
    const getCarbon = () => {
        axios.get(Constants.API_ADDRESS + "/carbon").then((response) => {
            console.log(response.data);
            setCarbon(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getCarbon();
    }, []);

}