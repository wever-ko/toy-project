export default function getPosition() {
  if (!navigator.geolocation) return 'Location not allowed';
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}
