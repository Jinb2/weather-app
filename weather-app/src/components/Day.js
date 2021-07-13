import React from "react";

const Day = (props) => {
  let weathers = props.weathers;

  // prevents error by checking if list is empty or not
  if (weathers.length > 0) {
    console.log("Data fetched!");
    // day of week
    var d0 = new Date(weathers[0]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d1 = new Date(weathers[1]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d2 = new Date(weathers[2]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d3 = new Date(weathers[3]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d4 = new Date(weathers[4]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d5 = new Date(weathers[5]["dt"]).toLocaleString("default", {
      weekday: "short",
    });
    var d6 = new Date(weathers[6]["dt"]).toLocaleString("default", {
      weekday: "short",
    });

    // temp for day
    var temp0 = weathers[0]["temp"]["day"];
    var temp1 = weathers[1]["temp"]["day"];
    var temp2 = weathers[2]["temp"]["day"];
    var temp3 = weathers[3]["temp"]["day"];
    var temp4 = weathers[4]["temp"]["day"];
    var temp5 = weathers[5]["temp"]["day"];
    var temp6 = weathers[6]["temp"]["day"];

    // rain probability for day
    var rain0 = weathers[0]["temp"];
    var rain1 = weathers[1]["temp"];
    var rain2 = weathers[2]["temp"];
    var rain3 = weathers[3]["temp"];
    var rain4 = weathers[4]["temp"];
    var rain5 = weathers[5]["temp"];
    var rain6 = weathers[6]["temp"];
  } else {
    console.log("Fetching data.....");
  }
  return (
  <div class="day">
      
  </div>)
};

export default Day;
