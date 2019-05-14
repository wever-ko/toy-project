import axios from 'axios';

export default async function getLocation(coords) {
  const { latitude: lat, longitude: lon } = coords;

  const { data } = await axios.get('https://maps.googleapis.com/maps/api/geocode/json',
    {
      params: {
        key: process.env.REACT_APP_GOOGLE_GEO_API_KEY,
        latlng: `${lat},${lon}`,
      },
    });

  const city = data.results[0].address_components.filter(e => e.types.includes('sublocality_level_2'));

  return city;
}
