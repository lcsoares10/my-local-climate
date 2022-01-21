import { render, screen } from "@testing-library/react";
import Theme from "../../../theme";
import WeatherCard from "../WeatherCard";
import { weatherMock, tempMock, dateCurrentMock, dtMock } from "./mock";

describe("<TemperatureMaxMin />", () => {
  it("should view in display skeleton", async () => {
    render(
      <Theme>
        <WeatherCard weather={null} />
      </Theme>
    );

    expect(screen.getByTestId("skeleton-weather-card")).toBeTruthy();
  });

  it("should view in display inline ", async () => {
    const { container, debug } = render(
      <Theme>
        <WeatherCard
          weather={weatherMock}
          temp={tempMock}
          inline
          dateCurrent={dateCurrentMock}
        />
      </Theme>
    );

    expect(screen.getByText(`${weatherMock.description}`)).toBeInTheDocument();
    expect(screen.getByTestId("image-mock")).toBeInTheDocument();
    expect(screen.getByText(`${tempMock.toFixed(0)}`)).toBeInTheDocument();
    expect(screen.getByText(`°C`)).toBeInTheDocument();
    expect(screen.getByText(dateCurrentMock)).toBeInTheDocument();
    expect(screen.getByTestId("weather-card")).toHaveStyle({
      flexDirection: "row",
    });

    expect(screen.getByTestId("weather-card")).toMatchSnapshot();
  });

  it("should view in display card ", async () => {
    render(
      <Theme>
        <WeatherCard weather={weatherMock} temp={tempMock} dt={dtMock} />
      </Theme>
    );

    expect(screen.getByText(`${weatherMock.description}`)).toBeInTheDocument();
    expect(screen.getByTestId("image-mock")).toBeInTheDocument();
    expect(screen.getByText(`${tempMock.toFixed(0)}`)).toBeInTheDocument();
    expect(screen.getByText(`°C`)).toBeInTheDocument();
    expect(screen.getByText(dtMock)).toBeInTheDocument();

    expect(screen.getByTestId("weather-card")).toHaveStyle({
      flexDirection: "column",
    });
  });
});
