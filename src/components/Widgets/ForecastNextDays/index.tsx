import useWeather from "../../../hooks/useWeather";
import WheaterCard from "../WeatherCard";
import { TDailyWeatherFormat } from "../../../context/weatherProvider";
import SkeletonForecastNextDays from "./skeleton";
import  scrollToElementById from '../../../utils/scrollToElement'

import * as S from "./styles";

const OFFSET_ELEMENT = -40;
const TIME_DISPLAY_SCROLL = 200;

type TForecastNextDays = {
  weatherDaily: Array<TDailyWeatherFormat>;
};

const ForecastNextDays: React.FC<TForecastNextDays> = ({
  children,
  weatherDaily,
  ...props
}) => {
  const { setSelectedDay, selectedDay } = useWeather();

  const handleSelectedDay = (date)=>{
    setSelectedDay(date)
    setTimeout(
      () => scrollToElementById('detail-weather', OFFSET_ELEMENT),
      TIME_DISPLAY_SCROLL
    );
  }

  if (!weatherDaily) {
    return (
      <S.ForecastNextDays {...props}>
        <SkeletonForecastNextDays />
      </S.ForecastNextDays>
    );
  }

  return (
    <S.ForecastNextDays {...props}>
      {children}

      <S.WrapperDays>
        {weatherDaily &&
          weatherDaily.map((day, key) => (
            <div
              key={"WheaterCard_" + key}
              onClick={() => handleSelectedDay(day.dt)}
              data-testid={"wheater-card-container"}
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
