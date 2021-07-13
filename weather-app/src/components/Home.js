import React, {useEffect, useState} from 'react';
import Clock from './Clock';
import {getDate} from '../utils/date.js'
import '../styling/home.css';

const Home = () => {

  const api_key = "dc857f068b2ea1e49b1f822db8641377"

    // lat lng coordinates
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // temp and desc
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  
  // weather code
  const [weatherCode, setWeatherCode] = useState(null);

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
  
  // fetch data from this url
  async function fetchCurrentWeatherJSON(){
      // wait for promise
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&units=imperial&appid="+api_key);
      const json = await response.json();
  
      // set the state for our temp and desc
      setTemp(json['main']['temp']);
      setDesc(json['weather'][0]['description']);
      setWeatherCode(json["weather"][0]["icon"]);
    }   

   // every minute update the weather
   useEffect(() => {

    // call function so it appears instead of delaying by the one minute
    if(lat && lng != null){
      fetchCurrentWeatherJSON();
    }

    // call function after every minute
    const interval = setInterval(() => {
    if(lat && lng != null){
    fetchCurrentWeatherJSON();
    }
    },6000);
    
    return () => clearInterval(interval);
    },[lat,lng]);

     // get date
     const date = getDate();

    // weather icon
    const weather_icon = "http://openweathermap.org/img/wn/"+weatherCode+".png"

    return(
      <div>
        <div className="home">
        <h1>{date}</h1>
        <h2>{temp} <span>&#8457;</span></h2>
        <h2> <img alt="weather-icon" src={weather_icon}></img> {desc} </h2>
        <Clock />
        </div>
        </div>
    )
}

export default Home;