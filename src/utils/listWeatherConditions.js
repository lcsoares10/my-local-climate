const WeatherConditions = [
  {
    range_id: [200, 232],
    main: "Thunderstorm",
    image: "storm.gif",
  },

  {
    range_id: [300, 321],
    main: "Drizzle",
    image: "rain.gif",
  },

  {
    range_id: [500, 531],
    main: "Rain",
    image: "rain.gif",
  },

  {
    range_id: [701, 781],
    main: "Atmosphere",
    image: "rain.gif",
  },
  {
    range_id: [800],
    main: "Clear",
    image: "sun.gif",
  },
  {
    range_id: [801, 804],
    main: "Clouds",
    image: "sun_clouds.gif",
  },
];

export const getWeatherImage = (idCurrent) => {
  const weatherSelected = WeatherConditions.find(
    (weather) =>
      idCurrent >= weather.range_id[0] && idCurrent <= weather.range_id[1]
  );
  return weatherSelected?.image;
};
