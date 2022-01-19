import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
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
export type TWeatherCurrentWithDaily = TDailyWeatherFormat &
  Omit<TCurrentWeatherFormat, "temp" | "feels_like">;

type TPropsContext = {
  weatherCurrent: TCurrentWeatherFormat;
  weatherDaily: Array<TDailyWeatherFormat>;
  getWeatherCurrentWithDaily: TWeatherCurrentWithDaily;
  selectedDay: String;
  setSelectedDay: Function;
  handleGetDayWeather: Function;
  getDataDaySelected: Function;
};

const DefaultValue = {
  weatherCurrent: null,
  weatherDaily: null,
  getWeatherCurrentWithDaily: null,
  selectedDay: null,
  setSelectedDay: () => {},
  handleGetDayWeather: () => {},
  getDataDaySelected: () => {},
};

const WeatherContext = createContext<TPropsContext>(DefaultValue);

function WeatherProvider({ children }) {
  const [weatherCurrent, setWeatherCurrent] = useState<TCurrentWeatherFormat>();
  const [weatherDaily, setWeatherDaily] =
    useState<Array<TDailyWeatherFormat>>();
  const [selectedDay, setSelectedDay] = useState<String>();

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

  const handleGetDayWeather = useCallback(
    (dateDay: String) => {
      const day = weatherDaily?.find((daily) => daily.dt === dateDay);
      return day;
    },
    [weatherDaily]
  );

  const getDataDaySelected = useCallback(() => {
    const day = weatherDaily?.find((daily) => daily.dt === selectedDay);
    return day;
  }, [selectedDay]);

  const getWeatherCurrentWithDaily = useMemo(() => {
    const dailyCurrent = handleGetDayWeather(weatherCurrent?.dt);
    const weather = {
      ...weatherCurrent,
      ...dailyCurrent,
      clouds: weatherCurrent?.clouds,
    };

    return weather;
  }, [weatherDaily, weatherCurrent]);

  useEffect(() => {
    setDataWeatherCurrent();
    setDailyWeather();
    setSelectedDay(weatherCurrent?.dt);
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
      selectedDay,
      setSelectedDay,
      handleGetDayWeather,
      getDataDaySelected,
    }),
    [weatherCurrent, weatherDaily, getWeatherCurrentWithDaily, selectedDay]
  );

  return (
    <WeatherContext.Provider value={value}>
      <ToastContainer />
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
