import { useState, useEffect } from 'react';
import './visualisations/Visu.css';
import axios from 'axios';
import { Chart } from "chart.js";
import { Form, Button } from 'react-bootstrap';
import V1 from "./visualisations/V1";
import V2 from "./visualisations/V2";
import V3 from "./visualisations/V3";
import V4 from './visualisations/V4';
import V5 from './visualisations/V5';
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
  const [errorMessage, setErrorMessage] = useState("");
  const [customState, setCustomState] = useState("idle");

  const [visu1, setVisu1] = useState("")
  const [visu2, setVisu2] = useState("")
  const [visu3, setVisu3] = useState("")
  const [visu4, setVisu4] = useState("")
  const [visu5, setVisu5] = useState("")

  const [v1text, setv1Text] = useState("")
  const [v2text, setv2Text] = useState("")
  const [v3text, setv3Text] = useState("")
  const [v4text, setv4Text] = useState("")
  const [v5text, setv5Text] = useState("")

  const url = uuidv4();

  //methods to save the custom view
  const saveView = async (e) => {
    console.log("Setting custom state to processing");
    setCustomState("processing");
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
      setCustomState("success")
      setTimeout(() => {
        setCustomState("idle")
      }, 3000);
    }).catch(error => {
      setCustomState("error");
      if (error.response.status === 404 || error.response.status === 500) {
        setErrorMessage("Something went wrong, please try again later")
        console.log(error)
      }
    })
  }

//methods to create the custom view
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

  //check if the user wants to see the charts in parallel
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


  //methods to create charts and text if user wants to see the preview
  const DrawChartV1 = () => (
    <div className="grid-container">
      <V1 />
      <p className="text">{v1text}</p>
    </div>
  );
  const DrawChartV2 = () => (
    <div className="grid-container">
      <V2 />
      <p className="text">{v2text}</p>
    </div>
  );

  const DrawChartV3 = () => (
    <div className="grid-container">
      <V3 />
      <p className="text">{v3text}</p>
    </div>

  );

  const DrawChartV4 = () => (
    <div className="grid-container">
      <V4 />
      <p className="text">{v4text}</p>
    </div>
  );

  const DrawChartV5 = () => (
    <div className="grid-container">
      <V5 />
      <p className="text">{v5text}</p>
    </div>
  );

  let customControls = null;
  switch (customState) {
    case "idle":
      customControls = <button type="submit">Save custom view</button>;
      console.log("idle")
      break;

    case "processing":
      customControls = <span style={{ color: 'blue' }}>Searching for custom views</span>;
      console.log("processing")
      break;

    case "success":
      customControls = <span style={{ color: 'green' }}>Success. You can see your own custom views by clicking custom views on a top bar</span>;
      console.log("success")
      break;

    case "error":
      customControls = <span style={{ color: 'red' }}>Error</span>;
      console.log("error")
      break;

    default:
      customControls = <button type="submit">Go back</button>;
  }

  useEffect(() => {
    getLayout();
  }, [parallel]);

  //method to create the layout of the custom view
  const getLayout = () => {
    const containerClass = parallel ? "grid-container custom" : "grid-container";
    const containerStyle = parallel ? { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" } : { width: "100%" };
    return (
      <div className={containerClass} style={containerStyle}>
        {(createV1 && createView) ? <DrawChartV1 /> : null}
        {(createV2 && createView) ? <DrawChartV2 /> : null}
        {(createV3 && createView) ? <DrawChartV3 /> : null}
        {(createV4 && createView) ? <DrawChartV4 /> : null}
        {(createV5 && createView) ? <DrawChartV5 /> : null}

      </div>
    );
  };

  return (
    <>
      <div className="form-container-box">
        <div className="custom-form-box">
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
              Preview the view
            </Button>
          </Form>

          <Form className='button-container' onSubmit={saveView}>
            <div>
              {
                customControls
              }
            </div>
          </Form>

          <div>
            <span style={{ color: 'red' }}>{errorMessage}</span>
          </div>
        </div>
      </div>
      {getLayout()}

    </>
  );
}