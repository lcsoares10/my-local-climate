import { render, screen } from "@testing-library/react";
import Theme from "../../theme";
import Row from ".";

describe("<Row />", () => {
  it("should view in display a Title", async () => {
    const { container, debug } = render(
      <Theme>
        <Row>
          <h1>Children</h1>
        </Row>
      </Theme>
    );
    expect(
      screen.getByRole("heading", { name: /Children/i })
    ).toBeInTheDocument();

    const row = screen.getByTestId("row-test");
    expect(row).not.toHaveStyle({
      flexDirection: "column",
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
