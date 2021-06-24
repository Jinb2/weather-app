import './styling/App.css';
import React, {useState} from 'react';
import Days from './components/Days';
import Navbar from './components/Navbar';


function App() {

   // get location
  //coordinates
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // function to get the location
  const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log("The lat is " + lat);
        console.log("The lng is " + lng);
      });
    }};

    // get location
    getLocation();
  

   // temp and desc
   const [temp, setTemp] = useState(null);
   const [desc, setDesc] = useState(null);
 
   // stores our api key
   const api_key = "dc857f068b2ea1e49b1f822db8641377"
 
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

    // function to get weather for current day
    // call our get weather for current location
    if(lat && lng != null){
      fetchWeatherJSON();
    }


  
  return (
    <div className="App">
      <Navbar />
      <Days lng = {lng} lat={lat} temp={temp} desc={desc} />

    </div>
  );
}

export default App;
