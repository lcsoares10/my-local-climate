import React from "react";
import * as S from "./styles";
import rain from "../../../../public/rain.gif";
import Image from "next/image";

import WheaterCard from "../WeatherCard";

function ForecastNextDays() {
  const dataTest = [1, 2, 3, 4];
  return (
    <S.ForecastNextDays>
      <h4>Previsão para os proximos 4 dias</h4>

      <S.WrapperDays>
        {dataTest.map((day) => (
          <WheaterCard  hoverEffect/>
        ))}
      </S.WrapperDays>
    </S.ForecastNextDays>
  );
}

export default ForecastNextDays;
