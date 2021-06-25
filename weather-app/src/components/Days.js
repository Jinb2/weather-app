import React from 'react';
import Day from './Day';
import {getDate} from '../utils/date.js'
import '../styling/home.css';

const Days = (props) => {

        // get date
        const date = getDate();

        return(
        <div>
            <h1>{date}</h1>
            <Day temp={props.temp} desc={props.desc}/>
        </div>
    );
};
export default Days;