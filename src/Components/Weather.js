import  { useState } from "react";
import "./Weather.css";


function Weather() {
  const [theme, setTheme] = useState("default");

  const predefinedWeathers = ["☀️ Sunny", "🌧️ Rainy", "☁️ Cloudy", "❄️ Snowy", "🌩️ Stormy"];

  const handleWeatherChange = (weather) => {
    setTheme(weather.toLowerCase());
  };

  return (
    <div className={`weather-theme ${theme}`}>
      <h1>Weather Theme Changer</h1>

      <div className="buttons">
        {predefinedWeathers.map((weather) => (
          <button key={weather} onClick={() => handleWeatherChange(weather)}>
            {weather}
          </button>
        ))}
      </div>

      <p className="description">
        {theme === "default" ? "Choose a weather theme!" : `Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
      </p>
    </div>
  );
}

export default Weather;
