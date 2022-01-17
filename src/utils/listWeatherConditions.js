const WeatherConditions = [
  {
    range_id: [200, 232],
    main: "Thunderstorm",
    image: "storm.gif",
    background: "storm.svg"
  },

  {
    range_id: [300, 321],
    main: "Drizzle",
    image: "rain.gif",
    background: "rain.jpg"
  },

  {
    range_id: [500, 531],
    main: "Rain",
    image: "rain.gif",
    background: "rain.jpg"
  },

  {
    range_id: [701, 781],
    main: "Atmosphere",
    image: "rain.gif",
    background: "rain.jpg"
  },
  {
    range_id: [790,800],
    main: "Clear",
    image: "sun.gif",
    background: "clear.jpg"
  },
  {
    range_id: [801, 804],
    main: "Clouds",
    image: "sun_clouds.gif",
    background: "clouds.jpg"
  },
];

export const getWeatherImage = (idCurrent,icon) => {
  const weatherSelected = WeatherConditions.find(
    (weather) =>
      idCurrent >= weather.range_id[0] && idCurrent <= weather.range_id[1]
  );
  return icon ? weatherSelected?.image : weatherSelected?.background;
};

