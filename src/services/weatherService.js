import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = "ccdb698573cd5a344408fd2caa00716b";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export const FahToCel = (inputFah) => {
  return ((inputFah - 32) * 5) / 9;
};

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);
};

const iconUrlFromIconCode = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
    dt,
    name,
  } = data;

  const { id, main, description, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    id,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    main,
    description,
    iconUrl: iconUrlFromIconCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
    name,
  };
};

const getFormattedWeatherData = async (seachParams) => {
  const formattedWeatherData = await getWeatherData(
    "weather",
    seachParams
  ).then(formatCurrent);

  return formattedWeatherData;
};

export default getFormattedWeatherData;
