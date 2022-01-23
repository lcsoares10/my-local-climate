const WeatherConditions = [
  {
    range_id: [200, 232],
    main: "Thunderstorm",
    image: "https://assets7.lottiefiles.com/temp/lf20_XkF78Y.json",
    background: "storm.svg",
  },

  {
    range_id: [300, 321],
    main: "Drizzle",
    image: "https://assets4.lottiefiles.com/packages/lf20_xzgLBZ.json",
    background: "rain.jpg",
  },

  {
    range_id: [500, 531],
    main: "Rain",
    image: "https://assets4.lottiefiles.com/packages/lf20_bco9p3ju.json",
    background: "rain.jpg",
  },

  {
    range_id: [701, 781],
    main: "Atmosphere",
    image: "https://assets4.lottiefiles.com/packages/lf20_bco9p3ju.json",
    background: "rain.jpg",
  },
  {
    range_id: [790, 800],
    main: "Clear",
    image: "https://assets5.lottiefiles.com/packages/lf20_xlky4kvh.json",
    background: "clear.jpg",
  },
  {
    range_id: [802, 804],
    main: "Clouds",
    image: "https://assets5.lottiefiles.com/packages/lf20_KUFdS6.json",
    background: "clouds.jpg",
  },
  {
    range_id: [799, 801],
    main: "Algumas nuvens",
    image: "https://assets6.lottiefiles.com/packages/lf20_64okjrr7.json",
    background: "clouds.jpg",
  },
];

export const getWeatherImage = (idCurrent, icon) => {
  const weatherSelected = WeatherConditions.find(
    (weather) =>
      idCurrent >= weather.range_id[0] && idCurrent <= weather.range_id[1]
  );
  return icon ? weatherSelected?.image : weatherSelected?.background;
};
