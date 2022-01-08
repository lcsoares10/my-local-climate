import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <button onClick={() => toggleTheme()}>change color</button>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
