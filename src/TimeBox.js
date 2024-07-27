import React, { useState, useEffect } from "react";
import "./index.css";


const TimeBox = ({ country, time }) => {
 console.log(country,time)
  return (
    <div className="clock-dial">
      <div className="dialBox">
      <div className="title">{country.charAt(0).toUpperCase() + country.slice(1)}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default TimeBox;
