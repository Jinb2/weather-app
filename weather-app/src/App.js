import './App.css';
import React, {useState} from 'react';
import Days from './components/Days'

function App() {

   // temp and desc
   const [temp, setTemp] = useState(null);
   const [desc, setDesc] = useState(null);
 
   // stores our api key
   const api_key = "e36c452edaae20e4ce9420dab5d7e360"
 
   // fetch data from this url
   async function fetchWeatherJSON(){
       // wait for promise
       const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&units=imperial&appid="+api_key);
       const json = await response.json();
       console.log(json);
 
       // set the state for our temp and desc
       setTemp(json['main']['temp']);
       setDesc(json['weather'][0]['description']);
       console.log("temp" + temp);
       console.log("desc" + desc);
   } 

  //coordinates
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  // function to get the location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);

        console.log("The lat is " + lat);
        console.log("The lng is " + lng);
        // call our get weather for current location
        if(lat && lng != null){
          fetchWeatherJSON();
        }
        
      }, () => {
        console.log(status);    
        setStatus('Unable to retrieve your location');
      });
    }
  }


  return (
    <div className="App">
      <button onClick={getLocation}> Weather for my location!</button>
      <h1>Coordinates</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
      <p>{status}</p>
      <Days lng = {lng} lat={lat} temp={temp} desc={desc} />
    </div>
  );
}

export default App;
