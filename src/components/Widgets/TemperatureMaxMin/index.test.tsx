import { render, screen } from "@testing-library/react";
import Theme from "../../../theme";
import TemperatureMaxMin from ".";
import mock from "./mock";

describe("<TemperatureMaxMin />", () => {
  it("should view in display skeleton", async () => {
    render(
      <Theme>
        <TemperatureMaxMin temp={null} />
      </Theme>
    );

    expect(screen.getByTestId("skeleton-temp-max-min")).toBeTruthy();
  });

  it("should view in display a temperature max and min", async () => {
    const { container } = render(
      <Theme>
        <TemperatureMaxMin temp={mock} />
      </Theme>
    );

    expect(screen.getByText(`${mock.max.toFixed(0)}`)).toBeInTheDocument();
    expect(screen.getByText(`${mock.min.toFixed(0)}`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
