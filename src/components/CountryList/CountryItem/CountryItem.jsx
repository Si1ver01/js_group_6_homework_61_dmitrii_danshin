import React from "react";
import classes from "./CountryItem.module.css";

const CountryItem = ({ name , handler}) => {
  return (
    <div className={classes.CountryItem} onClick={handler}>
      <span>{name}</span>
    </div>
  );
};

export default CountryItem;
