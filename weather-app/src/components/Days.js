import React, {useState} from 'react';
import Day from './Day';

const Days = (props) => {

        
        
        // returns component
        return(
        <div>
            <h1>Weather Forecast today.</h1>
            <Day temp={props.temp} desc={props.desc}/>
            
        </div>
    );
};
export default Days;