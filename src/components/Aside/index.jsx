import React from "react";
import * as S from "./style.js";

function Aside({ children }) {
  return (
    <S.Aside>
    {children}
    <h2>Detalhes Climaticos</h2>
    <p>Nuvens</p>
    <p>Precipitação</p>
    <p>Humidade</p>
    <p>Vento</p>
    <h3>Temperatura</h3>
    <span>25</span>
    <span>26</span>
    </S.Aside>
  );
}

export default Aside;
