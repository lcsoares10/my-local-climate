import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";

import * as S from "./styles";

function ButtonTheme({ children, ...props }) {
  const { type } = props;
  return (
    <S.Container {...props}>
      {type !== "light" && <LightMode size={30} color="white" />}
      {type !== "dark" && <DarkMode size={30} color="rgb(38,38,38)" />}

      {children}
    </S.Container>
  );
}

export default ButtonTheme;
