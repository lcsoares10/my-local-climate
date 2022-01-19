import useWeather from "../../../hooks/useWeather";
import WheaterCard from "../WeatherCard";
import { TDailyWeatherFormat } from "../../../context/weatherProvider";
import SkeletonForecastNextDays from "./skeleton";

import * as S from "./styles";

type TForecastNextDays = {
  weatherDaily: Array<TDailyWeatherFormat>;
};

const ForecastNextDays: React.FC<TForecastNextDays> = ({
  children,
  weatherDaily,
  ...props
}) => {
  const { setSelectedDay, selectedDay } = useWeather();

  if (!weatherDaily) {
    return (
      <S.ForecastNextDays {...props}>
        {children}
        <SkeletonForecastNextDays />
      </S.ForecastNextDays>
    );
  }

  return (
    <S.ForecastNextDays {...props}>
      {children}

      <S.WrapperDays>
        {weatherDaily &&
          weatherDaily.slice(0, 4).map((day, key) => (
            <div
              key={"WheaterCard_" + key}
              onClick={() => setSelectedDay(day.dt)}
            >
              <WheaterCard
                weather={day.weather[0]}
                temp={day.temp.day}
                dt={day.dt}
                hoverEffect
                selected={day.dt === selectedDay}
              />
            </div>
          ))}
      </S.WrapperDays>
    </S.ForecastNextDays>
  );
};

export default ForecastNextDays;
