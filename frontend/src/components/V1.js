import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";
import axios from "axios";
import Constants from "./Constants.json";

function V1() {

  const [isAnnual, setIsAnnual] = useState(true);
  const [isReconstruction, setIsReconstruction] = useState(false);

  const [data1, setData] = useState([]);
  const getData = () => {
    axios.get(Constants.API_ADDRESS + "/annualglobal").then((response) => {
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

  const [data2, setData2] = useState([]);
  const getData2 = () => {
    axios.get(Constants.API_ADDRESS + "/annualnorth").then((response) => {
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

  const [data3, setData3] = useState([]);
  const getData3 = () => {
    axios.get(Constants.API_ADDRESS + "/annualsouth").then((response) => {
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

  const [data4, setData4] = useState([]);
  const getData4 = () => {
    axios.get(Constants.API_ADDRESS + "/monthlyglobal").then((response) => {
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

  const [data5, setData5] = useState([]);
  const getData5 = () => {
    axios.get(Constants.API_ADDRESS + "/monthlynorth").then((response) => {
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

  const [data6, setData6] = useState([]);
  const getData6 = () => {
    axios.get(Constants.API_ADDRESS + "/monthlysouth").then((response) => {
      console.log(response.data);
      setData6(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData6();
  }, []);

  const [data7, setData7] = useState([]);
  const getData7 = () => {
    axios.get(Constants.API_ADDRESS + "/reconstruction").then((response) => {
      console.log(response.data);
      setData7(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData7();
  }, []);

  const data = {
    datasets: [
      {
        label: "Annual global",
        data: data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "global_anomaly",
        },
        pointRadius: 1,
      },
      {
        label: "Annual north",
        data: data2,
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgb(255, 159, 64)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
        },
        pointRadius: 0.2,
      },
      {
        label: "Annual south",
        data: data3,
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgb(255, 205, 86)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "southern_anomaly",
        },
        pointRadius: 1,
      },
    ],
  };
  const monthly = {
    datasets: [
      {
        label: "Monthly global",
        data: data4,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "global_anomaly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly north",
        data: data5,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "northern_anomaly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly south",
        data: data6,
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgb(153, 102, 255)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "southern_anomaly",
        },
        pointRadius: 1,
      },
    ],
  };
  const reconstruction = {
    datasets:[
      {
        label: "Reconstruction",
        data: data7,
        borderColor: "rgb(201, 203, 207)",
        backgroundColor: "rgb(201, 203, 207)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "t",
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
        text: "Visualisointi 1",
      },
    },
    scales: {
      x:
      {
        type: 'time',
        time: {
          unit: "year",
        },
        title: {
          display: true,
          text: "vuosi",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "temperature anomaly",
        },
      },
    },
  };

  const ReconstructionOptions = {
    responsive: true,
    sacked: false,
    plugins: {
      legend:
      {
        position: "top",
      },
      title: {
        display: true,
        text: "Reco",
      },
    },
    scales: {
      x:
      {
        type: 'time',
        time: {
          unit: "year",
        },
        title: {
          display: true,
          text: "vuosi",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "t",
        },
      },
    },
  };

  function changeData(){
    if(isAnnual){
      return data;
    }
    else{
      return monthly;
    }
  }
  function showReconstruction(){
    if(isReconstruction)
    return reconstruction;
    else{
      return null;
    }
  }

  return (
    <div className="child">
      <div className="container-fluid">
      <Line data={changeData()} options={options} alt="Anomaly data chart" />
        <Line data={reconstruction} options={ReconstructionOptions}alt="Reconstruction data chart" />
      </div>
      <div className="container-fluid">
        <button onClick={() => setIsAnnual(!isAnnual)} className = "btn btn-outline-primary-mt2">{isAnnual ? "Näytä data kuukausittain" : "Näytä data vuosittain"}</button>
        <button onClick={() => setIsReconstruction(!isReconstruction)} className = "btn btn-outline-primary-mt2">{isReconstruction ? "Piilota rekonstruktio" : "Näytä rekonstruktio"}</button>
      </div>
      <div style={{ Width: 1000 }}>
      </div>
    </div>
  );
}
export default V1;