import React, {useState, useEffect} from 'react';

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleString());

    //set time every seccond
    useEffect(() => {
    console.log("the time" + time);

    const interval = setInterval(() => { setTime(new Date().toLocaleTimeString());}
    ,1000);

    return () => clearInterval(interval);
    });

    return(
        <h2>{time}</h2>  
    )
}

export default Clock;