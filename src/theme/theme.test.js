import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Theme from "./index";
import dark from "./dark";
import light from "./light";
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
    fireEvent.click(container.querySelector("#button_theme"));

    const styleCurrent = window.getComputedStyle(
      container.querySelector("div")
    );

    expect(styleCurrent.backgroundColor).toBe(dark.colors.primary);
  });

  it("Should have default theme like light", async () => {
    expect(styleDefault.backgroundColor).toBe(light.colors.primary);
  });
});
