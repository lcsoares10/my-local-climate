import React from "react";
import * as S from "./styles";
import { TWeatherCurrentWithDaily } from "../../../context/weatherProvider";

type TPropsDetailWeather = Pick<
  TWeatherCurrentWithDaily,
  "pop" | "uvi" | "clouds" | "humidity" | "wind_speed"
>;

function DetailWeather({ ...props }: TPropsDetailWeather) {

  const { pop, uvi, clouds, humidity, wind_speed } = props;

  return (
    <>
      <S.TextLine>
        <p>Nuvens</p>
        <span>{`${clouds}%`}</span>
      </S.TextLine>

      <S.TextLine>
        <p>Precipitação</p>
        <span>{`${pop}%`}</span>
      </S.TextLine>

      <S.TextLine>
        <p>Humidade</p>
        <span>{`${humidity}%`}</span>
      </S.TextLine>

      <S.TextLine>
        <p>Vento</p>
        <span>{`${(wind_speed * 3.6).toFixed(1)} km/h`}</span>
      </S.TextLine>

      <S.TextLine>
        <p>Índice UV</p>
        <span>{`${uvi}`}</span>
      </S.TextLine>
    </>
  );
}

export default DetailWeather;
