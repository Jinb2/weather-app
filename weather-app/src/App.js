import React from 'react';
import Home from './components/Home';
import Week from './components/Week';
import Navbar from './components/Navbar'
import WeatherMaps from './components/WeatherMaps';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() { 
  return (
       <Router>
         <Navbar />
                <Switch>               
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/week" component={Week}/>
                    <Route exact path="/weathermaps" component={WeatherMaps}/>
                </Switch>
            </Router>
  );
}

export default App;