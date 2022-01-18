import React, { createContext, useMemo, useState, useEffect } from "react";
import useSWR, { SWRResponse } from "swr";
import dayjs from "dayjs";
import { fetcher } from "../../services/api";
import useMyGeolocation from "../../hooks/useMyGeolocation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  IWeatherResponse,
  ICurrentWeather,
  IDailyWeather,
} from "../../types/wheatherData";

 export type TDailyWeatherFormat = Omit<IDailyWeather, "dt"> & { dt: String };
 type TCurrentWeatherFormat = Omit<ICurrentWeather, "dt"> & { dt: String };
 export type TWeatherCurrentWithDaily = TDailyWeatherFormat & Omit<TCurrentWeatherFormat,"temp" | "feels_like">

type TPropsContext = {
  weatherCurrent: TCurrentWeatherFormat;
  weatherDaily: Array<TDailyWeatherFormat>;
  getWeatherCurrentWithDaily:TWeatherCurrentWithDaily ;
};

const DefaultValue = {
  weatherCurrent: null,
  weatherDaily: null,
  getWeatherCurrentWithDaily: null,
};

const WeatherContext = createContext<TPropsContext>(DefaultValue);

function WeatherProvider({ children }) {
  const [weatherCurrent, setWeatherCurrent] = useState<TCurrentWeatherFormat>();
  const [weatherDaily, setWeatherDaily] =
    useState<Array<TDailyWeatherFormat>>();

  const { coords, loading } = useMyGeolocation();
  const { data, error }: SWRResponse<IWeatherResponse> = useSWR(
    !loading ? `onecall?lat=${coords.latitude}&lon=${coords.longitude}` : null,
    fetcher
  );

  const setDailyWeather = () => {
    if (!!data?.daily) {
      const dailyFormat = data?.daily.map((daily) => {
        return { ...daily, dt: dayjs.unix(daily.dt).format("DD/MM/YYYY") };
      });
      setWeatherDaily(dailyFormat);
    }
  };

  const setDataWeatherCurrent = () => {
    if (!!data?.current) {
      setWeatherCurrent({
        ...data?.current,
        dt: dayjs.unix(data?.current.dt).format("DD/MM/YYYY"),
      });
    }
  };

  const getWeatherCurrentWithDaily = useMemo(() => {
    const dailyCurrent = weatherDaily?.find(
      (daily) => daily.dt === weatherCurrent.dt
    );
    const weather = { ...weatherCurrent, ...dailyCurrent };

    return weather;
  }, [weatherDaily, weatherCurrent]);

  useEffect(() => {
    setDataWeatherCurrent();
    setDailyWeather();
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
      weatherDaily,
      getWeatherCurrentWithDaily,
    }),
    [weatherCurrent, weatherDaily, getWeatherCurrentWithDaily]
  );

  return (
    <WeatherContext.Provider value={value}>
      <ToastContainer />
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
