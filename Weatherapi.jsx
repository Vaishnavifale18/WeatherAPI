
import React, { useState } from "react";
import "./weatherapi.css";

const Weatherapi = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "38e67db15461d08d380f9abe6770dc42";

  const getWeather = async () => {

    try {

      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);

    } catch (err) {

      setWeather(null);
      setError(err.message);

    }
  };

  return (

    <div className="weather-container">

      <h2>Weather App 🌤️</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        className="weather-input"
        onChange={(e) => setCity(e.target.value)}
      />

      <br />

      <button
        className="weather-btn"
        onClick={getWeather}
      >
        Get Weather
      </button>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {weather && (

        <div className="weather-info">

          <h3>{weather.name}</h3>

          <p>
            🌡️ Temperature: {weather.main.temp} °C
          </p>

          <p>
            ☁️ {weather.weather[0].description}
          </p>

          <p>
            💨 Wind: {weather.wind.speed} m/s
          </p>

        </div>
      )}

    </div>
  );
};

export default Weatherapi;
