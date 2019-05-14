import axios from 'axios';

export default async function getWeather(coords) {
  const { latitude: lat, longitude: lon } = coords;

  try {
    const result = axios.get('https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          APPID: process.env.REACT_APP_WEATHER_API_KEY,
          lat,
          lon,
          units: 'metric',
        },
      });
    return result;
  } catch (e) {
    return new Error(e);
  }
}
