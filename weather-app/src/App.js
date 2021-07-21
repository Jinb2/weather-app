import React from 'react';
import Home from './components/Home';
import Week from './components/Week';
import WeatherMaps from './components/WeatherMaps';
import video from './media/home-bg.mp4';
import './styling/app.css';

function App() { 
  return (
    <div className="app">
    <div className="container">
      <video autoPlay loop muted>
    <source src={video} type='video/mp4'/>
    </video>
    <div className="overlay">
      <Home />
      </div>
      <Week/>
    </div>
    <div>
    <WeatherMaps/>
    </div>
    </div>
       
     
  );
}

export default App;