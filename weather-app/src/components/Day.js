import React from "react";
import "../styling/day.css";
const Day = (props) => {
  var weathers = props.weather;

  // prevents error by checking if list is empty or not

  if (weathers.length > 0) {
    console.log("Data fetched!");
    // day of week
    var d0 = new Date(weathers[0]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d1 = new Date(weathers[1]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d2 = new Date(weathers[2]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d3 = new Date(weathers[3]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d4 = new Date(weathers[4]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d5 = new Date(weathers[5]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d6 = new Date(weathers[6]["dt"]).toLocaleString("default", {
      weekday: "short",
    });

    // temp for day
    var temp0 = weathers[0]["temp"];
    var temp1 = weathers[1]["temp"];
    var temp2 = weathers[2]["temp"];
    var temp3 = weathers[3]["temp"];
    var temp4 = weathers[4]["temp"];
    var temp5 = weathers[5]["temp"];
    var temp6 = weathers[6]["temp"];

    // rain probability for day
    var rain0 = weathers[0]["rain"];
    var rain1 = weathers[1]["rain"];
    var rain2 = weathers[2]["rain"];
    var rain3 = weathers[3]["rain"];
    var rain4 = weathers[4]["rain"];
    var rain5 = weathers[5]["rain"];
    var rain6 = weathers[6]["rain"];

    // weather icon
    var icon0 = "http://openweathermap.org/img/wn/" + weathers[0]["icon"] + ".png"; 
    var icon1 = "http://openweathermap.org/img/wn/" + weathers[1]["icon"] + ".png";
    var icon2 = "http://openweathermap.org/img/wn/" + weathers[2]["icon"] + ".png";
    var icon3 = "http://openweathermap.org/img/wn/" + weathers[3]["icon"] + ".png";
    var icon4 = "http://openweathermap.org/img/wn/" + weathers[4]["icon"] + ".png";
    var icon5 = "http://openweathermap.org/img/wn/" + weathers[5]["icon"] + ".png";
    var icon6 = "http://openweathermap.org/img/wn/" + weathers[6]["icon"] + ".png";

    // humidity
    var humidity0 = weathers[0]["humidity"];
    var humidity1 = weathers[1]["humidity"];
    var humidity2 = weathers[2]["humidity"];
    var humidity3 = weathers[3]["humidity"];
    var humidity4 = weathers[4]["humidity"];
    var humidity5 = weathers[5]["humidity"];
    var humidity6 = weathers[6]["humidity"];

  } else {
    console.log("Empty data!");
  }

  return (
    <div className="week">
      <h3>Weekly Forecast</h3>
      <ul className="grid-container">
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d0}</h4>
            <p>{temp0} <span>&#8457;</span></p>
            <p>{rain0}<img src={icon0}></img></p>
            <p>Humidity: {humidity0}%</p>
            <br></br>
            <p>Today</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d1}</h4>
            <p>{temp1} <span>&#8457;</span></p>
            <p>{rain1}<img src={icon1}></img></p>
            <p>Humidity: {humidity1}%</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d2}</h4>
            <p>{temp2} <span>&#8457;</span></p>
            <p>{rain2}<img src={icon2}></img></p>
            <p>Humidity: {humidity2}%</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d3}</h4>
            <p>{temp3} <span>&#8457;</span></p>
            <p>{rain3}<img src={icon3}></img></p>
            <p>Humidity: {humidity3}%</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d4}</h4>
            <p>{temp4} <span>&#8457;</span></p>
            <p>{rain4}<img src={icon4}></img></p>
            <p>Humidity: {humidity4}%</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d5}</h4>
            <p>{temp5} <span>&#8457;</span></p>
            <p>{rain5}<img src={icon5}></img></p>
            <p>Humidity: {humidity5}%</p>
          </div>
        </li>
        <li className="grid-item">
          <div></div>
          <div className="status">
            <h4>{d6}</h4>
            <p>{temp6} <span>&#8457;</span></p>
            <p>{rain6}<img src={icon6}></img></p>
            <p>Humidity: {humidity6}%</p>
          </div>
        </li>
      </ul>
    </div>
  
  );
};

export default Day;
