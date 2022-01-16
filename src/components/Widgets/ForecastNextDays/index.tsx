import React from "react";
import * as S from "./styles";

import WheaterCard from "../WeatherCard";

const ForecastNextDays: React.FC = ({children}) => {
  const dataTest = [1, 2, 3, 4];
  return (
    <S.ForecastNextDays>
      {children}

      <S.WrapperDays>
        {dataTest.map((day) => (
          <WheaterCard
            weather={{
              id: 200,
              main: "Rain",
              description: "chuva moderada",
              icon: "10d",
            }}
            hoverEffect
          />
        ))}
      </S.WrapperDays>
    </S.ForecastNextDays>
  );
};

export default ForecastNextDays;
