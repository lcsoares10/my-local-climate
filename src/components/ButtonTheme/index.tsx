import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";
import { MouseEventHandler } from "react";

import * as S from "./styles";

type ButtonThemeProps = {
  type: String;
  onClick: MouseEventHandler<HTMLDivElement>;
};
const ButtonTheme = ({ ...props }: ButtonThemeProps) => {
  const { type } = props;

  return (
    <S.Container {...props}>
      {type !== "light" && <LightMode size={30} color="white" />}
      {type !== "dark" && <DarkMode size={30} color="rgb(38,38,38)" />}
    </S.Container>
  );
};

export default ButtonTheme;
