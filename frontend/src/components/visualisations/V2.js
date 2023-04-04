import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import axios from "axios";
import Constants from "../Constants.json";

function V2() {

  const [isAnnual, setIsAnnual] = useState(true);
  const [isIcecore, setIsIcecore] = useState(false);

  const [datav2_1, setData] = useState([]);
  const getData = () => {
    axios.get(Constants.API_ADDRESS + "/v2annual").then((response) => {
      console.log(response.data);
      setData(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [datav2_2, setData2] = useState([]);
  const getData2 = () => {
    axios.get(Constants.API_ADDRESS + "/v2monthly").then((response) => {
      console.log(response.data);
      setData2(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData2();
  }, []);

  const [icecore1, setData3] = useState([]);
  const getData3 = () => {
    axios.get(Constants.API_ADDRESS + "/v2core1").then((response) => {
      console.log(response.data);
      setData3(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData3();
  }, []);

  const [icecore2, setData4] = useState([]);
  const getData4 = () => {
    axios.get(Constants.API_ADDRESS + "/v2core2").then((response) => {
      console.log(response.data);
      setData4(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData4();
  }, []);

  const [icecore3, setData5] = useState([]);
  const getData5 = () => {
    axios.get(Constants.API_ADDRESS + "/v2core3").then((response) => {
      console.log(response.data);
      setData5(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData5();
  }, []);

  const annual = {
    datasets: [
      {
        label: "CO2 Annual",
        data: datav2_1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean",
        },
        pointRadius: 1,
      },

      {
        label: "CO2 Monthly",
        data: datav2_2,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "average",
        },
        pointRadius: 1,
      },

    ],
  };

  const icecore = {
    datasets: [
      {
        label: "Ice core 1",
        data: icecore1,
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgb(255, 205, 86)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 1,
      },

      {
        label: "Ice core 2",
        data: icecore2,
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgb(153, 102, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 1,
      },

      {
        label: "Ice core 3",
        data: icecore3,
        borderColor: "rgb(255, 0, 255)",
        backgroundColor: "rgb(255, 0, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "co2",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    sacked: false,
    plugins: {
      legend:
      {
        position: "top",
      },
      title: {
        display: true,
        text: "Mauna Loa Co2 values from 1958 onwards " + (isAnnual ? "(yearly)" : "(monthly)"),
        font: {
          size: 20
        }
      },
    },
    scales: {
      x:
      {
        type: 'time',
        time: {
          unit: isAnnual ? "year" : "month",
        }
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Temperature anomaly (°C)",
        },
      },
    },
  };

  const iceCoreOptions = {
    responsive: true,
    sacked: false,
    plugins: {
      legend:
      {
        position: "top",
      },
      title: {
        display: true,
        text: "icecore",
        font: {
          size: 20
        }
      },
    },
    scales: {
      x:
      {
        type: 'time',
        time: {
          unit: "year",
        }
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "icecore",
        },
      },
    },
  };

  function changeDataOptions() {
    if (isAnnual && !isIcecore) {
      return annual;
    }
    else {
      return icecore;
    }
  }

  function changeData() {
    if (isAnnual && !isIcecore) {
      return annual;
    }

    else {
      return icecore;
    }
  }

  return (
    <div className="child">
      <div className="container-fluid">
        <Line data={changeData()} options={options} />
      </div>
      <div className="container-fluid">
        <button onClick={() => setIsAnnual(!isAnnual)} className="btn btn-outline-primary-mt2">{isAnnual ? "Yearly and monthly data" : "Icecore"}</button>
      </div>
      <div className="card mt-4" style={{ width: "24rem" }}>
        <div className="card-body">
          <h5 className="card-title">Description</h5>
          <p className="card-text">This chart shows the Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958. The chart shows Mauna Loa Co2 measurements yearly and monthly.</p>
          <p> The chart also shows the Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements.</p>
          <p> If you want to switch between yearly and monthly records, press the ''Show data monthly / yearly'' button.</p>
        </div>
      </div>
    </div>
  );
}
export default V2;