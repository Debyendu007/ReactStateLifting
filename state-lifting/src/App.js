import React, { useState } from 'react';
import TempratureInput from "./components/Temprature";
import './App.css';

function BoillingVerdict(props) {
  return (
    <div>
      {props.celcius === 100 ? "Water is boiling" : "Water is not boilling"}
    </div>
  );
}

function toCelcius(temp) {
  return ((temp-32)*(5/9));
}

function toFerenhite(temp) {
  return ((temp*9/5)+32);
}

function convertTo(temp, convert) {
  let temperature = parseFloat(temp);

  if(isNaN(temperature)) {
    return "";
  }

  temperature = convert(temperature);

  temperature = Math.round(temperature*1000)/1000;

  return temperature.toString();
}

function Calculator() {
  const [scale, setScale] = useState("c");
  const [temprature, setTemprature] = useState("");

  let celcius = (scale === "f") ? convertTo(temprature, toCelcius) : temprature;
  let fahrenhite = (scale === "c") ? convertTo(temprature, toFerenhite) : temprature;

  function handleCelciusChange(temp) {
    setScale("c");
    setTemprature(temp);
  }

  function handleFahrenhiteChange(temp) {
    setScale("f");
    setTemprature(temp);
  }

  return (
    <React.Fragment>
      <TempratureInput 
        scale="c"
        temprature={celcius}
        onTempratureChange={handleCelciusChange}/>
      <TempratureInput 
        scale="f"
        temprature={fahrenhite}
        onTempratureChange={handleFahrenhiteChange}/>
      <br />
      <BoillingVerdict celcius={parseFloat(celcius)} />
    </React.Fragment>
  );
}

export default Calculator;
