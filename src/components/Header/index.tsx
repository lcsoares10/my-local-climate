import React from "react";
import * as S from "./styles";
import Container from "../Container";

const Header: React.FC = () => {
  const date = new Date();

  return (
    <Container>
      <S.Header>
        <S.Text>developer by Lucas Soares</S.Text>
        <S.Text>{date.toLocaleDateString()}</S.Text>
      </S.Header>
    </Container>
  );
};

export default Header;
