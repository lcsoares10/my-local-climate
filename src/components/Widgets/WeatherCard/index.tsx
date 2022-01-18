import React, { useEffect, useState } from "react";
import {IWeatherResponse,ICurrentWeather,IDailyWeather,TWeather} from '../../../types/wheatherData'

import Image from "next/image";

import { getWeatherImage } from "../../../utils/listWeatherConditions";

import * as S from "./styles";

type TTemperature  = {
  temp:number;
};

export type WeatherCardProps  = {
  weather: TWeather &  TTemperature;
  hoverEffect?: boolean;
  inline?: boolean;
  
};

const WeatherCard = ({ ...props }: WeatherCardProps) => {
  const [gifWeatherImage, setGifWeatherImage] = useState("");


  const { weather } = props;
  useEffect(() => {
    const image = getWeatherImage(weather?.id,true);
    setGifWeatherImage(image);
  }, [weather]);

  return (
    <S.WeatherCard {...props}>
      <S.TemperatureCard {...props}>{weather?.temp?.toFixed(0)}</S.TemperatureCard>
      <S.IconCard {...props}>
        <Image
          src={
            gifWeatherImage
              ? require("../../../../public/".concat(gifWeatherImage))
              : require("../../../../public/rain.gif")
          }
          alt="Picture of the author"
        />
      </S.IconCard>
      <S.Description {...props}>{weather?.description}</S.Description>
    </S.WeatherCard>
  );
};

export default React.memo(WeatherCard);
