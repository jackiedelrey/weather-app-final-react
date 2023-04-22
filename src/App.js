import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Glasgow" />
        <footer>
          This project is created by{" "}
          <a href="https://shieldstalent.com" target="_blank" rel="noreferrer">
            Jackie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jackiedelrey/weather-app-final-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
