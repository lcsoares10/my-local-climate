import React from "react";
import useWeather from "../../hooks/useWeather"

import * as S from "./styles";
import WheaterCard from "../Widgets/WeatherCard";

import ForecastNextDays from "../Widgets/ForecastNextDays";
import Image from "../Image";

const Main: React.FC = () => {

  const {weatherCurrent} = useWeather()

  const weather = weatherCurrent?.weather[0]
  const temp = weatherCurrent?.temp
  return (
    <S.Main>
      <S.Section>
        <S.Mask>
          <S.Article>
            <WheaterCard
              inline
              weather={{...weather,temp}}
            />
            <ForecastNextDays>
              <h4>Previsão para os proximos 4 dias</h4>
            </ForecastNextDays>
          </S.Article>
        </S.Mask>
        <Image />
      </S.Section>
    </S.Main>
  );
};

export default Main;
