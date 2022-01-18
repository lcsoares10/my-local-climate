import React from "react";
import useWeather from "../../hooks/useWeather";

import * as S from "./styles";
import WheaterCard from "../Widgets/WeatherCard";

import ForecastNextDays from "../Widgets/ForecastNextDays";
import ImageBackgroundWeather from "../ImageBackgroundWeather";

const Main: React.FC = () => {
  const { weatherCurrent } = useWeather();

  const weather = weatherCurrent?.weather[0];
  const temp = weatherCurrent?.temp;

  return (
    <S.Main>
      <S.Section>
        <S.Mask>
          <S.Article>
            <WheaterCard inline weather={weather} temp={temp} />
            <ForecastNextDays>
              <h4>Previsão para os proximos 4 dias</h4>
            </ForecastNextDays>
          </S.Article>
        </S.Mask>
        <ImageBackgroundWeather id_weather={weather?.id} />
      </S.Section>
    </S.Main>
  );
};

export default Main;
