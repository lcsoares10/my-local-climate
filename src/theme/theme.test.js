import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Theme from "./index";
import black from "./dark";
import white from "./light";
import styled from "styled-components";

const TestDivBackground = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

describe("Theme", () => {
  const { container } = render(
    <Theme>
      <TestDivBackground />
    </Theme>
  );
  const styleDefault = window.getComputedStyle(container.querySelector("div"));

  it("should change the theme for dark", async () => {
    fireEvent.click(screen.getByText("change color"));
    const styleCurrent = window.getComputedStyle(
      container.querySelector("div")
    );
    expect(styleCurrent.backgroundColor).toBe(black.colors.primary);
  });

  it("Should have default theme like light", async () => {
    expect(styleDefault.backgroundColor).toBe(white.colors.primary);
  });
});
