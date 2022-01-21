export interface IWeatherResponse {
  current: ICurrentWeather;
  daily: Array<IDailyWeather>;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export type TWeather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export interface ICurrentWeather
  extends Omit<IDailyWeather, "temp" | "feels_like"> {
  visibility: number;
  temp: number;
  feels_like: number;
}

export interface IDailyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: TFeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain?: number;
  sunrise: number;
  sunset: number;
  temp: TTemp;
  uvi: number;
  weather: Array<TWeather>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export type TFeelsLike = {
  day: number;
  eve: number;
  morn: number;
  night: number;
};

export type TTemp = {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
};
