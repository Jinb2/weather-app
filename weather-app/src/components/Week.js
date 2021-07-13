import { React, useState, useEffect } from "react";
import Day from "./Day";
import "../styling/week.css";

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
    }
  };

  // get location
  getLocation();

  // states for the current and 7 day forecast
  // temp and rain percentages
  const [weather, setWeather] = useState([]);

  const api_key = "dc857f068b2ea1e49b1f822db8641377";

  // fetch data from this url
  async function fetchWeekWeatherJSON() {
    // wait for promise
    // example https://api.openweathermap.org/data/2.5/onecall?lat=40.74&lon=-73.82&exclude=hourly,minutely&units=imperial&appid=dc857f068b2ea1e49b1f822db8641377
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lng +
        "&exclude=hourly,minutely&units=imperial&appid=" +
        api_key
    );

    const json = await response.json();

    setWeather([
      {
        dt: json["daily"][0]["dt"] * 1000,
        temp: json["daily"][0]["temp"]["day"],
        rain: json["daily"][0]["rain"],
      },
      {
        dt: json["daily"][1]["dt"] * 1000,
        temp: json["daily"][1]["temp"]["day"],
        rain: json["daily"][1]["rain"],
      },
      {
        dt: json["daily"][2]["dt"] * 1000,
        temp: json["daily"][2]["temp"]["day"],
        rain: json["daily"][2]["rain"],
      },
      {
        dt: json["daily"][3]["dt"] * 1000,
        temp: json["daily"][3]["temp"]["day"],
        rain: json["daily"][3]["rain"],
      },
      {
        dt: json["daily"][4]["dt"] * 1000,
        temp: json["daily"][4]["temp"]["day"],
        rain: json["daily"][4]["rain"],
      },
      {
        dt: json["daily"][5]["dt"] * 1000,
        temp: json["daily"][5]["temp"]["day"],
        rain: json["daily"][5]["rain"],
      },
      {
        dt: json["daily"][6]["dt"] * 1000,
        temp: json["daily"][6]["temp"]["day"],
        rain: json["daily"][6]["rain"],
      },
    ]);
  }

  // limit our async calls
  useEffect(() => {
    // call function so it appears instead of delaying by the one minute
    if (lat && lng != null) {
      fetchWeekWeatherJSON();
    }

    // limit to every 10 minutes to not exceed api limit
    const interval = setInterval(() => {
      if (lat && lng != null) {
        fetchWeekWeatherJSON();
      }
    }, 600000);

    return () => clearInterval(interval);
  }, [lat, lng]);

  return (
    <div className="week">
      <Day weather={weather} />
    </div>
  );
};

export default Week;
