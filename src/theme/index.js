import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";
import defaultTheme from "./default";

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProvider
      theme={
        theme === "light"
          ? { ...light, ...defaultTheme }
          : { ...dark, ...defaultTheme }
      }
    >
      <button
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: "99",
        }}
        onClick={() => toggleTheme()}
      >
        change color
      </button>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
