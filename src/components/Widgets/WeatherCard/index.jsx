import React from "react";
import * as S from "./styles";
import rain from "../../../../public/rain.gif";
import Image from "next/image";

function WeatherCard() {
  return (
    <S.WheaterCard>
      <S.TemperatureCard>24</S.TemperatureCard>
      <S.IconCard>
        <Image src={rain} alt="Picture of the author" />
      </S.IconCard>
      <S.Description>chuva moderada</S.Description>
    </S.WheaterCard>
  );
}

export default WeatherCard;
