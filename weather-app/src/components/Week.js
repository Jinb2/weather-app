import {React, useState, useEffect} from 'react';
import '../styling/week.css';
const Week = () => {

    // lat lng coordinates
     const [lat, setLat] = useState(null);
     const [lng, setLng] = useState(null);
   
     // sets lat and lng
     const getLocation = () => {
       if (!navigator.geolocation) {
       } else {
           navigator.geolocation.getCurrentPosition((position) => {
           setLat(position.coords.latitude);
           setLng(position.coords.longitude);
         });
       }};
   
     // get location
     getLocation();
   // states for the current and 7 day forecast
  // temp and rain percentages
  const [weather, setWeather] = useState([]);

  /*
  const [day2, setDay2] = useState(null);
  const [temp2, setTemp2] = useState(null);
  const [rain2,setRain2] = useState(null);

  const [day3, setDay3] = useState(null);
  const [temp3, setTemp3] = useState(null);
  const [rain3,setRain3] = useState(null);

  const [day4, setDay4] = useState(null);
  const [temp4, setTemp4] = useState(null);
  const [rain4,setRain4] = useState(null);

  const [day5, setDay5] = useState(null);
  const [temp5, setTemp5] = useState(null);
  const [rain5,setRain5] = useState(null);

  const [day6, setDay6] = useState(null);
  const [temp6, setTemp6] = useState(null);
  const [rain6, setRain6] = useState(null);

  const [day7, setDay7] = useState(null);
  const [temp7, setTemp7] = useState(null);
  const [rain7, setRain7] = useState(null);
  
  */

  const api_key = "dc857f068b2ea1e49b1f822db8641377"
  
  //
  const abortController = new AbortController();
  const signal = abortController.signal;

  // fetch data from this url
  async function fetchWeatherJSON(){
      // wait for promise
      // example https://api.openweathermap.org/data/2.5/onecall?lat=40.74&lon=-73.82&exclude=hourly,minutely&units=imperial&appid=dc857f068b2ea1e49b1f822db8641377
      const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lng+"&exclude=hourly,minutely&units=imperial&appid="+api_key, {signal: signal});
      const json = await response.json();

      // d1.toLocaleString("default", { weekday: "short" })
      const information = {"dt": json["daily"][0]["dt"]*1000, "temp" : json["daily"][0]["temp"]["day"], "rain" : json["daily"][0]["rain"]};
      setWeather(information);
    }   

    // clean up resources after unmount
    useEffect(() => {
      if (lat && lng != null) {
        fetchWeatherJSON();
      }
      return function cleanp(){
        abortController.abort();
      }; 
  });

    // TODO: setup and format information better.
  
    return( 
        <div className="week">
           {weather["dt"]}
        </div>

    )
}

export default Week