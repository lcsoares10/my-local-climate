import React from "react";
import useWeather from "../../hooks/useWeather";
import useSWRImmutable from 'swr/immutable'
import useMyGeolocation from "../../hooks/useMyGeolocation";
import * as S from "./styles";
import WheaterCard from "../Widgets/WeatherCard";

import ForecastNextDays from "../Widgets/ForecastNextDays";
import ImageBackgroundWeather from "../ImageBackgroundWeather";
import {fetcher} from '../../services/api'

const Main: React.FC = () => {
  const { weatherCurrent } = useWeather();
  const { coords, loading } = useMyGeolocation();
  const weather = weatherCurrent?.weather[0];
  const temp = weatherCurrent?.temp;

// Request for name get city
const { data, error } = useSWRImmutable(
  !loading ? `weather?lat=${coords.latitude}&lon=${coords.longitude}` : null,
  fetcher)

  return (
    <S.Main>
      <S.Section>
        <S.Mask>
          <S.Article>
            <WheaterCard inline weather={weather} temp={temp} />
            <ForecastNextDays>
              <h4>Previsão para os proximos 4 dias</h4>
            </ForecastNextDays>
            <p>{`${data?.name}, ${data?.sys?.country}`}</p>
          </S.Article>

        </S.Mask>
        <ImageBackgroundWeather id_weather={weather?.id} />


      </S.Section>
    </S.Main>
  );
};

export default Main;
