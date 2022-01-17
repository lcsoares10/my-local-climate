import Theme from "../theme";
import { WeatherProvider } from "../context/weatherProvider";
import GlobalStyles from "../css/global.js";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";
import Row from "../components/Row";

import useMyGeolocation from "../hooks/useMyGeolocation";

const Home: React.FC = () => {
  const { loading, coords } = useMyGeolocation();
  console.log(loading);
  return (
    <Theme>
      <Header />
      <WeatherProvider>
        <Row>
          <Main />
          <Aside />
        </Row>
      </WeatherProvider>

      <GlobalStyles />
    </Theme>
  );
};
export default Home;
