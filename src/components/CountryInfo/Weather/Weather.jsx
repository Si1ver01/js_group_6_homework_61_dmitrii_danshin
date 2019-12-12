import React from "react";
import classes from "./Weather.module.css";

const Weather = ({ weather }) => {
  return (
    <div className={classes.Weather}>
      <h3>Weather</h3>
      <ul>
        {weather.map((elem, index) => (
          <li key={index}>
            <span>Date: {new Date(elem.time).toLocaleString('ru')}</span>
            <span>Temp : {elem.airTemperature[0].value} C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
