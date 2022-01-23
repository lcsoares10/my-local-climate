import React, { useState, useEffect } from "react";
import useWeather from "../../hooks/useWeather";
import useSWRImmutable from "swr/immutable";
import useMyGeolocation from "../../hooks/useMyGeolocation";
import { Refresh } from "@styled-icons/material/Refresh";
import * as S from "./styles";
import WheaterCard from "../Widgets/WeatherCard";
import { getWeatherImage } from "../../utils/listWeatherConditions";
import ForecastNextDays from "../Widgets/ForecastNextDays";
import Button from "../Button";

import { fetcher } from "../../services/api";

const Main: React.FC = () => {
  const {
    weatherCurrent,
    weatherDaily,
    dateCurrentWeather,
    mutate,
    isValidating,
  } = useWeather();
  const [urlImageBackground, setUrlImageBackground] = useState("");
  const { coords, loading } = useMyGeolocation();
  const weather = weatherCurrent?.weather[0];
  const temp = weatherCurrent?.temp;

  // Request for name get city and country
  const { data, error } = useSWRImmutable(
    !loading ? `weather?lat=${coords.latitude}&lon=${coords.longitude}` : null,
    fetcher
  );

  useEffect(() => {
    const image = getWeatherImage(weather?.id);
    setUrlImageBackground(image);
  }, [weather?.id]);

  return (
    <S.Main>
      <S.Section>
        <S.Content
          srcImg={`./${urlImageBackground}`}
          loading={weather ? false : true}
        >
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
            {data && (
              <>
                <Button onClick={() => mutate()} loading={isValidating}>
                  <Refresh size={30} color="white" />
                </Button>
                <S.localeText>
                  {`${data?.name}, ${data?.sys?.country}`}
                </S.localeText>
              </>
            )}
          </S.Article>
        </S.Content>
      </S.Section>
    </S.Main>
  );
};

export default Main;
