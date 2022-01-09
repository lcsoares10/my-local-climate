import React from "react";
import * as S from "./styles";

function Container({ children }) {
  return <S.Row>{children}</S.Row>;
}

export default Container;
