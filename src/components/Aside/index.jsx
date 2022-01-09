import React from "react";
import * as S from "./style.js";

function Aside({ children }) {
  return (
    <S.Aside>
      {children}
      <S.Section>
        <h2>Detalhes Climaticos</h2>
        <S.Article>
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
        </S.Article>
        <S.Article>
          <h3>Temperatura</h3>
          <span>25</span>
          <span>26</span>
        </S.Article>
      </S.Section>
    </S.Aside>
  );
}

export default Aside;
