import { useContext } from "react";
import { WeatherContext } from "../../context/weatherProvider";

export default function useWeather() {
  const weatherLocal = useContext(WeatherContext);

  if (!weatherLocal) {
    throw new Error("weatherLocal should be used within a CurriculumProvider");
  }

  return weatherLocal;
}
