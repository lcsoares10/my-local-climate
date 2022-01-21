import React from "react";
import * as S from "./styles";

const Container: React.FC = ({ children }) => {
  return <S.Container data-testid="container-test">{children}</S.Container>;
};

export default Container;
