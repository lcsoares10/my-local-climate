import React from "react";
import * as S from "./styles";

const Row: React.FC = ({ children }) => {
  return <S.Row data-testid="row-test">{children}</S.Row>;
};

export default Row;
