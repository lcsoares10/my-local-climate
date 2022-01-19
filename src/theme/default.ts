// theme.ts
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: Array<String>;
    fontSizes: {
      small: CSSObject;
      medium: CSSObject;
      large: CSSObject;
      extra_large: CSSObject;
    };
    media: {
      tablet: CSSObject;
      mobile: CSSObject;
    };
    colors: {
      primary: CSSObject;
      secondary: CSSObject;
      white: CSSObject;
      main: CSSObject;
    };
  }
}
export const defaultTheme: DefaultTheme = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    extra_large: "3rem",
  },
  media: {
    tablet: "800px",
    mobile: "450px",
  },
};
