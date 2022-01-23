import React from 'react';

import * as S from "./styles";

const Button = ({children,loading,...props}) => {
  return (
      <S.Button {...props}>
          {!loading &&children}
          {loading && <S.Loading/>}
      </S.Button>
  )
}

export default Button;