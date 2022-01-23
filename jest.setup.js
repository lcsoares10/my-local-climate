import "@testing-library/jest-dom/extend-expect";

jest.mock("./src/hooks/useMyGeolocation", () => ({
  __esModule: true,
  default: () => ({
    coords: {
      log: 111,
      lat: 222,
    },
    loading: false,
  }),
}));

jest.mock("@lottiefiles/react-lottie-player", () => ({
  __esModule: true,
  Player: () => {
    return <div data-testid=" lottie-mock">Mock Lottie</div>;
  },
}));

