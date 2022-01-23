import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/theme/default"
import dark from "../src/theme/dark"
import light from "../src/theme/light"

const theme = { ...dark, ...defaultTheme }

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

addDecorator(ThemeDecorator);

