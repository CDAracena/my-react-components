import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Time = () => {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  let date = new Date();
  return (<span>
    {week[date.getDay()]}
  </span>)
}

export default Time;
