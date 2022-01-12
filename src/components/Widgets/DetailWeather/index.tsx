import React from "react";
import * as S from "./styles";

function DetailWeather() {
  return (
    <>
      <S.TextLine>
        <p>Nuvens</p>
        <span>100%</span>
      </S.TextLine>

      <S.TextLine>
        <p>Precipitação</p>
        <span>100%</span>
      </S.TextLine>

      <S.TextLine>
        <p>Humidade</p>
        <span>100%</span>
      </S.TextLine>

      <S.TextLine>
        <p>Vento</p>
        <span>100%</span>
      </S.TextLine>
    </>
  );
}

export default DetailWeather;
