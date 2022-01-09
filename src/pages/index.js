import Theme from "../theme";
import GlobalStyles from "../css/global.js";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";
import Row from "../components/Row";

export default function Home() {
  return (
    <Theme>
      <Header />

      <Row>
        <Main />
        <Aside />
      </Row>

      <GlobalStyles />
    </Theme>
  );
}
