import { render, screen } from "@testing-library/react";
import Theme from "../../theme";
import light from '../../theme/light'
import Container from ".";

describe("<Container />", () => {
  it("should view in display a Title", async () => {
    const { container, debug } = render(
      <Theme>
        <Container>
          <h1>Children Container</h1>
        </Container>
      </Theme>
    );
    

    expect(
      screen.getByRole("heading", { name: /Children Container/i })
    ).toBeInTheDocument();

    const row = screen.getByTestId("container-test");
    expect(row).toHaveStyle({
      backgroundColor: `${light.colors.primary}`,
    });
    expect(container.lastChild).toMatchInlineSnapshot(`
     <div
       class="sc-gsDKAQ hNobHX"
       data-testid="container-test"
     >
       <h1>
         Children Container
       </h1>
     </div>
    `);
  });
});
