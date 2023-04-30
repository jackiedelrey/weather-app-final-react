import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="snow-day" />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecasr-temperatures-max">19 </span>{" "}
            <span className="WeatherForecasr-temperatures-min">10 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
