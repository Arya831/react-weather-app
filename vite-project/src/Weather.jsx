import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [background, setBackground] = useState('from-blue-100 to-blue-300');

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'City not found or API is not working.');
      }

      setWeatherData(data);

      const weatherCondition = data.weather[0].main.toLowerCase();
      if (weatherCondition.includes('clear')) {
        setBackground('from-blue-300 to-blue-500');
      } else if (weatherCondition.includes('cloud')) {
        setBackground('from-gray-400 to-gray-600');
      } else if (weatherCondition.includes('rain')) {
        setBackground('from-gray-500 to-gray-700');
      } else if (weatherCondition.includes('thunderstorm')) {
        setBackground('from-gray-700 to-gray-900');
      } else if (weatherCondition.includes('snow')) {
        setBackground('from-blue-100 to-white');
      } else {
        setBackground('from-blue-100 to-blue-300');
      }

    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${background} flex justify-center items-center p-4`}>
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Weather App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-3 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetchWeather();
              }
            }}
          />
          <button
            className="p-3 bg-blue-600 text-white font-bold rounded-r-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={fetchWeather}
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin-slow"></div>
          </div>
        )}
        {error && <p className="text-center text-red-600 font-medium">{error}</p>}

        {weatherData && (
          <div className="text-center mt-6 p-4">
            <h2 className="text-4xl font-bold text-gray-800">{weatherData.name}</h2>

            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto"
            />

            <p className="text-6xl font-extrabold my-2 text-gray-800">{weatherData.main.temp}°C</p>
            <p className="text-xl capitalize text-gray-600 mb-4">{weatherData.weather[0].description}</p>

            <div className="flex justify-around my-4 text-gray-700">
              <div className="text-center">
                <p className="text-2xl font-bold">{weatherData.main.humidity}%</p>
                <p className="text-sm">Humidity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{weatherData.main.feels_like}°C</p>
                <p className="text-sm">Feels Like</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{weatherData.wind.speed} m/s</p>
                <p className="text-sm">Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;