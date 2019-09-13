import React from "react";

function TempratureInput(props) {
  
  const scaleNames = {
    "c": "celcius",
    "f": "fahrenhite"
  };

  function handleChange(e) {
    props.onTempratureChange(e.target.value);
  }

  return (
    <fieldset>
      <lagend>
        Enter temprature in {scaleNames[props.scale]}
      </lagend>
      &nbsp;&nbsp;
      <input value={props.temprature}
              onChange={handleChange}></input>
    </fieldset>
  );
}

export default TempratureInput;