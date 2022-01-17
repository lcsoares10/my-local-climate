import React, { createContext, useMemo, useState, useEffect } from "react";
import useSWR,{SWRResponse} from "swr";
import { fetcher } from "../../services/api";
import useMyGeolocation from "../../hooks/useMyGeolocation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {IWeatherResponse,ICurrentWeather,IDailyWeather} from '../../types/wheatherData'

type TPropsContext = {
  weatherCurrent: ICurrentWeather;
  weatherDaily: Array<IDailyWeather>;
}

const DefaultValue = {
  weatherCurrent: null,
  weatherDaily: null
}

const WeatherContext = createContext<TPropsContext>(DefaultValue);

function WeatherProvider({ children }) {
  const [weatherCurrent, setWeatherCurrent] = useState<ICurrentWeather>();
  const [weatherDaily, setWeatherDaily] = useState<Array<IDailyWeather>>();

  const { coords, loading } = useMyGeolocation();
  const { data, error }:SWRResponse<IWeatherResponse> = useSWR(
    !loading ? `onecall?lat=${coords.latitude}&lon=${coords.longitude}` : null,
    fetcher
  );

  const handleDailyWeather = () => {
    setWeatherDaily(data?.daily);
  };

  const handleGetDataWeatherCurrent = () => {

    setWeatherCurrent(data?.current);
  };

  useEffect(() => {
    handleGetDataWeatherCurrent();
    handleDailyWeather();
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
      weatherCurrent,weatherDaily
    }),
    [weatherCurrent,weatherDaily]
  );

  return (
    <WeatherContext.Provider value={value}>
      <ToastContainer />
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
