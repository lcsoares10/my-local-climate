import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";
import defaultTheme from "./default";
import ButtonTheme from "../components/ButtonTheme";

const Theme = ({ children }) => {
  const [themeType, setThemeType] = useState("light");
  const toggleTheme = () =>
    setThemeType(themeType === "light" ? "dark" : "light");

  return (
    <ThemeProvider
      theme={
        themeType === "light"
          ? { ...light, ...defaultTheme }
          : { ...dark, ...defaultTheme }
      }
    >
      <ButtonTheme onClick={toggleTheme} type={themeType} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
