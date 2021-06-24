import React from 'react';
const Day = (props) => (
    <div>
        <h2> {props.temp}  <span>&#8457;</span></h2>
        <h2> {props.desc} </h2>
        </div>
);
        
    

export default Day;