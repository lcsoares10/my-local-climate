import React from "react";
import useWeather from "../../hooks/useWeather";
import useSWRImmutable from "swr/immutable";
import useMyGeolocation from "../../hooks/useMyGeolocation";
import * as S from "./styles";
import WheaterCard from "../Widgets/WeatherCard";

import ForecastNextDays from "../Widgets/ForecastNextDays";
import ImageBackgroundWeather from "../ImageBackgroundWeather";
import { fetcher } from "../../services/api";

const Main: React.FC = () => {
  const { weatherCurrent, weatherDaily, dateCurrentWeather } = useWeather();
  const { coords, loading } = useMyGeolocation();
  const weather = weatherCurrent?.weather[0];
  const temp = weatherCurrent?.temp;

  // Request for name get city and country
  const { data, error } = useSWRImmutable(
    !loading ? `weather?lat=${coords.latitude}&lon=${coords.longitude}` : null,
    fetcher
  );

  return (
    <S.Main >
      <S.Section>
        <S.Content srcImg={"./rain.svg"}> 
          <S.Article>
            <WheaterCard
              inline
              weather={weather}
              dateCurrent={dateCurrentWeather}
              temp={temp}
            />
            <ForecastNextDays weatherDaily={weatherDaily}>
              <h4>Previsão para os proximos dias</h4>
            </ForecastNextDays>
            <S.localeText>
              {data && `${data?.name}, ${data?.sys?.country}`}
            </S.localeText>
          </S.Article>
        </S.Content>
        {/* {window && (window.innerWidth >700 && <ImageBackgroundWeather id_weather={weather?.id} />)} */}
      </S.Section>
    </S.Main>
  );
};

export default Main;
