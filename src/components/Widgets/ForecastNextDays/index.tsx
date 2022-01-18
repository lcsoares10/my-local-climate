import React from "react";
import * as S from "./styles";

import WheaterCard from "../WeatherCard";
import { TDailyWeatherFormat } from "../../../context/weatherProvider"

type TForecastNextDays = {
  weatherDaily: Array<TDailyWeatherFormat>;
};

const ForecastNextDays: React.FC<TForecastNextDays> = ({
  children,
  weatherDaily,
  ...props
}) => {
  return (
    <S.ForecastNextDays>
      {children}

      <S.WrapperDays>
        {weatherDaily && weatherDaily.slice(0,4).map((day) => (
          <WheaterCard
            weather={day.weather[0]}
            temp={day.temp.day}
            dt={day.dt}
            hoverEffect
          />
        ))}
      </S.WrapperDays>
    </S.ForecastNextDays>
  );
};

export default ForecastNextDays;
