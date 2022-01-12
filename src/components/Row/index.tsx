import React from "react";
import * as S from "./styles";

const Container: React.FC = ({ children }) => {
  return <S.Row>{children}</S.Row>;
};

export default Container;
