import { fireEvent, render, screen } from "@testing-library/react";
import Theme from "../../../theme";
import ForecastNextDays from ".";
import mock from "./mock";
import userEvent from "@testing-library/user-event";
import  WeatherCard from "../WeatherCard"

describe("<ForecastNextDays />", () => {
  it("should view in display skeleton", async () => {
    render(
      <Theme>
        <ForecastNextDays weatherDaily={null} />
      </Theme>
    );

    expect(screen.getByTestId("skeleton-wrapper-days")).toBeTruthy();
  });

  it("should view a title and two cards ", async () => {


    const {container}=render(
      <Theme>
        <ForecastNextDays weatherDaily={mock} >
          <h4>Previsão para os proximos dias</h4>
        </ForecastNextDays>
      </Theme>
    );
    expect(
      screen.getByRole("heading", { name: /Previsão para os proximos dias/i })
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("wheater-card-container")).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();

    // const wheaterCard = screen.getAllByTestId("wheater-card-container");
    // //wheaterCard.forEach((card) => userEvent.click(card));

    // //expect(jest.spyOn(ForecastNextDays, 'teste')).toHaveBeenCalledWith("1");
  });


});
