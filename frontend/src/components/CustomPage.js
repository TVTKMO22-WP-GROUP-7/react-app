import { useEffect, useState } from 'react';
import './visualisations/Visu.css';
import axios from 'axios';
import { Chart } from "chart.js";
import { Form, Button } from 'react-bootstrap';
import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from "./visualisations/V3";
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';
import { useNavigate } from 'react-router-dom';
import Constants from './Constants.json';
import { v4 as uuidv4 } from 'uuid';


export default function CustomPage() {
  const username = localStorage.getItem("username");
  const [createView, setCreateView] = useState(false)
  const [createV1, setCreateV1] = useState(false)
  const [createV2, setCreateV2] = useState(false)
  const [createV3, setCreateV3] = useState(false)
  const [createV4, setCreateV4] = useState(false)
  const [createV5, setCreateV5] = useState(false)


  //
  const [textv1, setTextv1] = useState("")
  const [id, setId] = useState("");
  const [userID, setUserId]= useState("")


  const [visu1, setVisu1] = useState("")
  const [visu2, setVisu2] = useState("")
  const [visu3, setVisu3] = useState("")
  const [visu4, setVisu4] = useState("")
  const [visu5, setVisu5] = useState("")
  //
  const [v1text, setv1Text] = useState("")
  const [v2text, setv2Text] = useState("")
  const [v3text, setv3Text] = useState("")
  const [v4text, setv4Text] = useState("")
  const [v5text, setv5Text] = useState("")

  const url = uuidv4();

  const navigate = useNavigate();
  //const [changeSaveState,setChangeSaveState] = useState("idle");

  function checkTextV1(t) {
    if (createView) {
      setCreateView(false)
    }
    setv1Text(t)
  }

  function checkTextV2(t) {
    if (createView) {
      setCreateView(false)
    }
    setv2Text(t)
  }

  function checkTextV3(t) {
    if (createView) {
      setCreateView(false)
    }
    setv3Text(t)
  }

  function checkTextV4(t) {
    if (createView) {
      setCreateView(false)
    }
    setv4Text(t)
  }

  function checkTextV5(t) {
    if (createView) {
      setCreateView(false)
    }
    setv5Text(t)
  }


  function saveView(e) {
    e.preventDefault()
    axios.post(Constants.API_ADDRESS + "/custompage", {
          username: username,
          v1text: v1text,
          v2text: v2text,
          v3text: v3text,
          v4text: v4text,
          v5text: v5text,
          visu1: visu1,
          visu2: visu2,
          visu3: visu3,
          visu4: visu4,
          visu5: visu5,
          url: url,
          paraller: false,
    }).then(response => {
      console.log(response)
      console.log("onnistui")
    }).catch(error => {
      alert("erroria vitusti")
      console.log(error)
    })
  }

 
  const handleChangeV1 = event => {
    if (event.target.checked) {
      setCreateV1(true)
    } else {
      setCreateV1(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV1(true)
    }
    if ((createV1 && createView) || (createV2 && createView)||(createV3 && createView) || (createV4 && createView)||(createV5 && createView))  {
      setCreateView(false)
    }
  }

  const handleChangeV2 = event => {
    if (event.target.checked) {
      setCreateV2(true)
    } else {
      setCreateV2(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV2(true)
    }
    if ((createV1 && createView) || (createV2 && createView)||(createV3 && createView) || (createV4 && createView)||(createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV3 = event => {
    if (event.target.checked) {
      setCreateV3(true)
    } else {
      setCreateV3(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV3(true)
    }
    if ((createV1 && createView) || (createV2 && createView)||(createV3 && createView) || (createV4 && createView)||(createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV4 = event => {
    if (event.target.checked) {
      setCreateV4(true)
    } else {
      setCreateV4(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV4(true)
    }
    if ((createV1 && createView) || (createV2 && createView)||(createV3 && createView) || (createV4 && createView)||(createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV5 = event => {
    if (event.target.checked) {
      setCreateV5(true)
    } else {
      setCreateV5(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV5(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  function handleClick(e) {
    e.preventDefault()
    if (createV1 || createV2 || createV3  || createV4 || createV5) {
      setCreateView(true)
    }
  }
  

  const DrawChartV1 = () => (
    <div id='chart' className="p-5 mb-4 bg-light rounded-3">
      <h1>Global historical surface temperature anomalies from January 1850 onwards (v1)</h1>
      <div className="container-fluid py-5">
        <div>
          <V1 /> 
        </div>
      </div>
    </div>
  );
  const DrawChartV2 = () => (
    <div id='chart' className="p-5 mb-4 bg-light rounded-3">
      <h1>Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958 (v2)</h1>
      <div className="container-fluid py-5">
        <div>
          <V2 /> 
        </div>
      </div>
    </div>
  );

  const DrawChartV3 = () => (
    <div id='chart' className="p-5 mb-4 bg-light rounded-3">
      <h1>Evolution of global temperature over the past two million years (v3) </h1>
      <div className="container-fluid py-5">
        <div>
          <V3 />
          
        </div>
      </div>
    </div>
  );

  const DrawChartV4 = () => (
    <div id='chart' className="p-5 mb-4 bg-light rounded-3">
      <h1>CO2 emissions by country (v4) </h1>
      <div className="container-fluid py-5">
        <div>
          <V4 />
        </div>
      </div>
    </div>
  );

  const DrawChartV5 = () => (
    <div id='chart' className="p-5 mb-4 bg-light rounded-3">
      <h1>CO2 emissions by sectors(v5) </h1>
      <div className="container-fluid py-5">
        <div>
          <V5 />
        </div>
      </div>
    </div>
  );


  return (
    <>

<div id='chart' className="custom">
        <div className="form-check form-switch container-fluid py-5">
          <table>
          <tr>
              <td>
                <h2>Valitse haluamasi kaaviot</h2>
              </td>
              </tr>
              <tr>
            <td>
                <input type="checkbox" className="check" onChange={handleChangeV1} />
                <label>V1 </label>
                &nbsp;
                <td><input type="text" id='inputs' placeholder='Kuvausteksti' value={v1text} onChange={e => checkTextV1(e.target.value)} />
                </td>
                </td>
                </tr>
                <tr>
            <td>
                <input type="checkbox" className="check" onChange={handleChangeV2} />
                <label>V2 </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Kuvausteksti' value={v2text} onChange={e => checkTextV2(e.target.value)} />
                </td>
                </tr>
                <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV3} />
              <label> V3 </label>
              &nbsp;
                <input type="text" id='inputs' placeholder='Kuvausteksti' value={v3text} onChange={e => checkTextV3(e.target.value)} />
              </td>
              </tr>
              <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV4} />
                <label>V4 </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Kuvausteksti' value={v4text} onChange={e => checkTextV4(e.target.value)} />
              </td>
              </tr>
              <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV5} />
                <label>V5 </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Kuvausteksti' value={v5text} onChange={e => checkTextV5(e.target.value)} />
              </td>
              </tr>
        </table>
        <Form id='button-container' onSubmit={handleClick}>
          <Button block="true" type="submit"  >
            Luo näkymä
          </Button>
        </Form>
        <Form id= 'button-container' onSubmit={saveView}>
          <Button block="true" type="submit">
            Tallenna
          </Button>
        </Form>
      </div>
    </div>
    <div className="container-fluid py-5" >
    {(createV1 && createView) ? <DrawChartV1 /> : null}
    {(createV2 && createView) ? <DrawChartV2 /> : null}
    {(createV3 && createView) ? <DrawChartV3 /> : null}
    {(createV4 && createView) ? <DrawChartV4 /> : null}
    {(createV5 && createView) ? <DrawChartV5 /> : null}

    </div>
  
</>
  );
}