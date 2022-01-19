import React, { useEffect, useState } from "react";

import Image from "next/image";

import { getWeatherImage } from "../../../utils/listWeatherConditions";

import * as S from "./styles";
import { TWeather } from "../../../types/wheatherData";
import { SkeletonWheaterCard } from "./skeleton";

export type WeatherCardProps = {
  weather: TWeather;
  temp?: number;
  hoverEffect?: boolean;
  inline?: boolean;
  dt?: String;
  selected?: boolean;
  dateCurrent?: String;
};

const WeatherCard = ({ ...props }: WeatherCardProps) => {
  const [gifWeatherImage, setGifWeatherImage] = useState("");

  const { weather, temp, dt, dateCurrent } = props;

  useEffect(() => {
    const image = getWeatherImage(weather?.id, true);
    setGifWeatherImage(image);
  }, [weather]);

  if (!weather) {
    return <SkeletonWheaterCard {...props} />;
  }

  return (
    <>
      <S.WeatherCard {...props}>
        <S.ContentTemp {...props}>
          <S.TemperatureCard {...props}>{temp?.toFixed(0)}<S.CelsiusText>°C</S.CelsiusText></S.TemperatureCard>
          <S.DateCurrent {...props}>{dateCurrent}</S.DateCurrent>
        </S.ContentTemp>

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
        {dt && <S.Description {...props}>{dt}</S.Description>}
      </S.WeatherCard>
    </>
  );
};

export default React.memo(WeatherCard);
