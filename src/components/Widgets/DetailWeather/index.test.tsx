import { render, screen } from "@testing-library/react";
import Theme from "../../../theme";
import DetailWeather from ".";
import { mockDetailWheater,mockDetailWheaterEmpty } from "./mock";

describe("<DetailWeather />", () => {
  it("should view in display weather details", async () => {
    const { container, debug } = render(
      <Theme>
        <DetailWeather {...mockDetailWheater} />
      </Theme>
    );
  

    expect(screen.getByText(/Nuvens/i)).toBeInTheDocument()
    expect(screen.getByText(/Precipitação/i)).toBeInTheDocument()
    expect(screen.getByText(/Humidade/i)).toBeInTheDocument()
    expect(screen.getByText(/Vento/i)).toBeInTheDocument()
    expect(screen.getByText(/Índice UV/i)).toBeInTheDocument()

    expect(screen.getByText(`${mockDetailWheater.pop}%`)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockDetailWheater.clouds}%`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockDetailWheater.humidity}%`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${mockDetailWheater.uvi}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${(mockDetailWheater.wind_speed * 3.6).toFixed(1)} km/h`)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should view in display skeleton", async () => {
    const { container, debug } = render(
      <Theme>
        <DetailWeather {...mockDetailWheaterEmpty} />
      </Theme>
    );

    expect(screen.getByTestId("skeleton-detailweather")).toBeTruthy();

  });
});
