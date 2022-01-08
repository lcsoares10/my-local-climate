import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Header from "./index";

const date = new Date();

describe("Header", () => {
  const { container } = render(<Header />);

  it("should view in display two text", async () => {
    const textDescriptionDeveloper = screen.getByText(
      /developer by Lucas Soares/i
    );
    const textDate = screen.getByText(date.toLocaleDateString());

    expect(textDescriptionDeveloper).toBeInTheDocument();
    expect(textDate).toBeInTheDocument();
  });
});
