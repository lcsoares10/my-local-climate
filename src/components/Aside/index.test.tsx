import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Aside from "./index";
import Theme from "../../theme";
import {WeatherProvider} from "../../context/weatherProvider"


describe("<Aside / >", () => {
  const { container } = render(
    <Theme>
        <WeatherProvider>
            <Aside  />
        </WeatherProvider>

    </Theme>
  );

  it("should view in display two text and components skeleton", async () => {
    expect(
      screen.getByRole("heading", { name: /Detalhes Climaticos/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /Temperatura/i })
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("skeleton-temp-max-min")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("skeleton-detailweather")
      ).toBeInTheDocument();

  });
});
