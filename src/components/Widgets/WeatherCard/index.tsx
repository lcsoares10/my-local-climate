import React, { useEffect, useState } from "react";

import Image from "next/image";

import { getWeatherImage } from "../../../utils/listWeatherConditions";

import * as S from "./styles";

type WeatherProps = {
  id: number;
  main: String;
  description: String;
  icon: String;
};

export type WeatherCardProps = {
  weather: WeatherProps;
  hoverEffect?: boolean;
  inline?: boolean;
};

const WeatherCard = ({ ...props }: WeatherCardProps) => {
  const [gifWeatherImage, setGifWeatherImage] = useState("");
  const { weather } = props;
  useEffect(() => {
    const image = getWeatherImage(weather?.id);
    setGifWeatherImage(image);
  }, [weather]);

  return (
    <S.WeatherCard {...props}>
      <S.TemperatureCard {...props}>24</S.TemperatureCard>
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
