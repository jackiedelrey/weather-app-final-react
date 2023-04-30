import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "22b87393a0c4d40fffa30fb7ef2to93a";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="snow-day" size={36} />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-temperature-max">19° </span>{" "}
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
