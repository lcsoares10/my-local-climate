import React from "react";

import TemperatureMaxMin from "../../components/Widgets/TemperatureMaxMin";
import DetailWeather from "../../components/Widgets/DetailWeather";

import * as S from "./style.js";

function Aside({ children }) {
  return (
    <S.Aside>
      {children}
      <S.Section>
        <h2>Detalhes Climaticos</h2>
        <S.Article>
          <DetailWeather />
        </S.Article>
        <h3>Temperatura</h3>
        <S.Article>
          <TemperatureMaxMin />
        </S.Article>
      </S.Section>
    </S.Aside>
  );
}

export default Aside;
