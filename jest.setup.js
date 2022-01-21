import "@testing-library/jest-dom/extend-expect";
jest.mock('next/image', () => ({
    __esModule: true,
    default: () => {
      return (<div data-testid="image-mock">'image'</div>);
    },
  }));

