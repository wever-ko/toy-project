export default function getPosition() {
  if (!navigator.geolocation) {
    throw new Error('NavigatorError');
  }

  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}
