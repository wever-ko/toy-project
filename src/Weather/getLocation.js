import axios from 'axios';

export default async function getLocation(coords) {
  const { latitude: lat, longitude: lon } = coords;

  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=${lat},${lon}&key=${process.env.REACT_APP_GOOGLE_GEO_API_KEY}`,
  );

  const city = data.results[0].address_components.filter((elem) => elem.types.includes('sublocality_level_1'));

  console.log(city);

  return city;
}