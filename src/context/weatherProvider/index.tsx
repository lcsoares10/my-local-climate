import React, { createContext, useMemo, useState, useEffect } from "react";

const WeatherContext = createContext({});

function WeatherProvider({ children }) {
  const [weatherCurrent, setWeatherCurrent] = useState({});

  const handleGetDataWeather = () =>
    setWeatherCurrent({
      coord: {
        lon: -42.9897,
        lat: -22.9627,
      },
      weather: [
        {
          id: 211,
          main: "Thunderstorm",
          description: "trovoadas",
          icon: "11n",
        },
      ],
      base: "stations",
      main: {
        temp: 27.79,
        feels_like: 31.3,
        temp_min: 26.96,
        temp_max: 27.94,
        pressure: 1010,
        humidity: 78,
      },
      visibility: 10000,
      wind: {
        speed: 4.12,
        deg: 200,
      },
      clouds: {
        all: 75,
      },
      dt: 1642369622,
      sys: {
        type: 1,
        id: 8429,
        country: "BR",
        sunrise: 1642321217,
        sunset: 1642369362,
      },
      timezone: -10800,
      id: 3473648,
      name: "Icaraí",
      cod: 200,
    });

  useEffect(() => {
    handleGetDataWeather();
  }, []);

  const value = useMemo(
    () => ({
      weatherCurrent,
    }),
    [weatherCurrent]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
