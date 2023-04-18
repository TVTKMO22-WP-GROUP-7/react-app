import { useState } from 'react';
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
  const [parallel, setParallel] = useState(false)

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

  const saveView = async (e) =>  {
    e.preventDefault()

    await axios.post(Constants.API_ADDRESS + "/custompage", {
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
      parallel: parallel
    }).then(response => {
      console.log(v1text)
      console.log(v2text)
      console.log(v3text)
      console.log(v4text)
      console.log(v5text)
      console.log(response)
      console.log("onnistui")
    }).catch(error => {
      alert("erroria vitusti")
      console.log(error)
    })
  }


  const handleChangeV1 = event => {
    if (event.target.checked && saveView) {
      setCreateV1(true)
      setVisu1(true)
    } else {
      setCreateV1(false)
      setVisu1(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV1(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV2 = event => {
    if (event.target.checked && saveView) {
      setCreateV2(true)
      setVisu2(true)
    } else {
      setCreateV2(false)
      setVisu2(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV2(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV3 = event => {
    if (event.target.checked && saveView) {
      setCreateV3(true)
      setVisu3(true)
    } else {
      setCreateV3(false)
      setVisu3(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV3(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV4 = event => {
    if (event.target.checked && saveView) {
      setCreateV4(true)
      setVisu4(true)
    } else {
      setCreateV4(false)
      setVisu4(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV4(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleChangeV5 = event => {
    if (event.target.checked && saveView) {
      setCreateV5(true)
      setVisu5(true)
    } else {
      setCreateV5(false)
      setVisu5(false)
    }
    if (event.target.checked && createView) {
      setCreateView(false)
      setCreateV5(true)
    }
    if ((createV1 && createView) || (createV2 && createView) || (createV3 && createView) || (createV4 && createView) || (createV5 && createView)) {
      setCreateView(false)
    }
  }

  const handleParallel = event => {
    if (event.target.checked) {
      setParallel(true)
    } else {
      setParallel(false)
    }
  }

  function handleClick(e) {
    e.preventDefault()
    if (createV1 || createV2 || createV3 || createV4 || createV5) {
      setCreateView(true)
    }
  }


  const DrawChartV1 = () => (
    <div className="container-fluid py-5">
      <V1 />
      {v1text}
    </div>
  );
  const DrawChartV2 = () => (
    <div className="container-fluid py-5">
      <V2 />
      {v2text}
    </div>
  );

  const DrawChartV3 = () => (
    <div className="container-fluid py-5">
      <V3 />
      {v3text}

    </div>

  );

  const DrawChartV4 = () => (
    <div className="container-fluid py-5">
      <V4 />
      {v4text}
    </div>
  );

  const DrawChartV5 = () => (
    <div className="container-fluid py-5">
      <V5 />
      {v5text}
    </div>
  );


  return (
    <>

      <div id='chart' className="custom">
        <div className="form-check form-switch container-fluid py-5">
          <table>
            <tr>
              <td>
                <h2>Choose the charts you want to have in your custom view</h2>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV1} />
                <label>V1 (Global historical surgace temperature anomalies from January 1850 onwards) </label>
                &nbsp;
                <td><input type="text" id='inputs' placeholder='Description text (optional)' value={v1text} onChange={(e) => setv1Text(e.target.value)} />
                </td>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV2} />
                <label>V2 (Mauna Loa Co2 values from 1958 onwards) </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Description text (optional)' value={v2text} onChange={(e) => setv2Text(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV3} />
                <label> V3 (Evolution of global temperature over the past two million years)</label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Description text (optional)' value={v3text} onChange={(e) => setv3Text(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV4} />
                <label>V4 (CO2 emissions over time) </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Description text (optional)' value={v4text} onChange={(e) => setv4Text(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleChangeV5} />
                <label>V5 (CO2 emissions all sectors) </label>
                &nbsp;
                <input type="text" id='inputs' placeholder='Description text (optional)' value={v5text} onChange={(e) => setv5Text(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="check" onChange={handleParallel} />
                <label>Do you want to have visualisations pararrel to each other (default is stacked) </label>
              </td>
            </tr>
          </table>
          <Form className='button-container' onSubmit={handleClick}>
            <Button block="true" type="submit"  >
              Show view
            </Button>
          </Form>
          <Form className='button-container' onSubmit={saveView}>
            <Button block="true" type="submit">
              Save
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