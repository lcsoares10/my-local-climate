import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Image from "next/image";
import { getWeatherImage } from "../../../utils/listWeatherConditions";

function WeatherCard({ weather,...props}) {
  console.log(weather);
  const [gifWeatherImage, setGifWeatherImage] = useState("");

  useEffect(() => {
    const image = getWeatherImage(weather?.id);
    setGifWeatherImage(image);
  }, [weather]);

  return (
    <S.WheaterCard {...props}>
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
    </S.WheaterCard>
  );
}

export default WeatherCard;
