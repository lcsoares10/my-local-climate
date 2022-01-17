import React, { createContext, useMemo, useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../services/api";
import useMyGeolocation from "../../hooks/useMyGeolocation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const WeatherContext = createContext({});

function WeatherProvider({ children }) {
  const [weatherCurrent, setWeatherCurrent] = useState();

  const { coords, loading } = useMyGeolocation();
  const { data, error } = useSWR(
    !loading ? `onecall?lat=${coords.latitude}&lon=${coords.longitude}` : null,
    fetcher
  );

  const handleGetDataWeather = () => {
    console.log(data)
    setWeatherCurrent(data);
  };

  useEffect(() => {
    handleGetDataWeather();
  }, [data]);

  useEffect(() => {
    if (error)
      toast.error("Desculpe, ocorreu um erro!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [error]);

  const value = useMemo(
    () => ({
      weatherCurrent,
    }),
    [weatherCurrent]
  );

  return (
    <WeatherContext.Provider value={value}>
      <ToastContainer />
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
