import React from "react";
import useWeather from "../../hooks/useWeather"


import TemperatureMaxMin from "../Widgets/TemperatureMaxMin";
import DetailWeather from "../Widgets/DetailWeather";


import * as S from "./style";

const Aside: React.FC = ({ children }) => {
  const {getWeatherCurrentWithDaily,getDataDaySelected,selectedDay} = useWeather()


  const { pop, uvi, clouds, humidity, wind_speed,temp } = selectedDay && getDataDaySelected() || getWeatherCurrentWithDaily


  return (
    <S.Aside>
      {children}
      <S.Section>
        <h2>Detalhes Climaticos</h2>
        <S.Article>
          <DetailWeather {...{pop, uvi, clouds, humidity, wind_speed}} />
        </S.Article>
        <h3>Temperatura</h3>
        <S.Article>
          <TemperatureMaxMin temp={temp} />
        </S.Article>
      </S.Section>
    </S.Aside>
  );
};

export default Aside;
