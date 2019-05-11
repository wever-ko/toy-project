import axios from 'axios';

export default async function getWeather(coords) {
  const { latitude: lat, longitude: lon } = coords;

  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );
}
