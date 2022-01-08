import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Header from "./index";
import Theme from "../../theme";

const date = new Date();

describe("Header", () => {
  const { container } = render(
    <Theme>
      <Header />
    </Theme>
  );

  it("should view in display two text", async () => {
    const textDescriptionDeveloper = screen.getByText(
      /developer by Lucas Soares/i
    );
    const textDate = screen.getByText(date.toLocaleDateString());

    expect(textDescriptionDeveloper).toBeInTheDocument();
    expect(textDate).toBeInTheDocument();
  });
});
