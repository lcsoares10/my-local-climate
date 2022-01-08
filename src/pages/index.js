import styled from "styled-components";
import Theme from "../theme";
import GlobalStyles from "../css/global.js";

const Main = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  return (
    <Theme>
      <Main>
        <h1>Hello</h1>
      </Main>
      <GlobalStyles />
    </Theme>
  );
}
