import React from "react";
import classes from "./Information.module.css";

const Information = ({ list }) => {
  return (
    <div className={classes.Information}>
      <h1>{list.name}</h1>
      <p>Capital : {list.capital}</p>
      <p>Population : {list.population} </p>
    </div>
  );
};

export default Information;
