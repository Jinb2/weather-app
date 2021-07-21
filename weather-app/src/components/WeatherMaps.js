import React, { useEffect, useState } from "react";
import "../styling/map.css";
import * as L from "leaflet";

const WeatherMaps = () => {
  const api_key = "dc857f068b2ea1e49b1f822db8641377";

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

  // create tile layer after component mounts

  // creates our air temperature container
  useEffect(() => {

    // check if container exists already
    var container = L.DomUtil.get("mapid");
    if (container != null) {
      container._leaflet_id = null;
    }

    if (lat && lng != null) {
      let mymap = L.map("mapid").setView([lat, lng], 5);

      L.tileLayer(
        "https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?&appid={appID}",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          layer: "temp_new",
          appID: api_key
        }
      ).addTo(mymap);
    }
  }, [lat, lng]);

  // creates wind
  useEffect(() => {

    // check if container exists already
    var container = L.DomUtil.get("precip");
    if (container != null) {
      container._leaflet_id = null;
    }

    if (lat && lng != null) {
      let mymap = L.map("precip").setView([lat, lng], 5);

      L.tileLayer(
        "http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={appID}",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          op: "PA0",
          appID: api_key
        }
      ).addTo(mymap);
    }
  }, [lat, lng]);

  return <div className="weathermap">
    <h4>Air temperature at a height of 2 meters weather layer</h4>
    <div id="mapid"></div>
    <h4>Accumulated precipitation weather layer</h4>
    <div id="precip"></div>
    </div>;
};

export default WeatherMaps;
