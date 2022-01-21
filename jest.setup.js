import "@testing-library/jest-dom/extend-expect";
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="image-mock">'image'</div>;
  },
}));

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
