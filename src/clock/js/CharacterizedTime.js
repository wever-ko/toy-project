const timeToString = timeNum => ((timeNum < 10) ? `0${timeNum.toString()}` : timeNum.toString());

const CharacterizedTime = (date) => {
  const time = {
    year: timeToString(date.getFullYear()),
    month: timeToString(date.getMonth() + 1),
    day: timeToString(date.getDate()),
    hour: timeToString(date.getHours()),
    minute: timeToString(date.getMinutes()),
  };
  return time;
};

export default CharacterizedTime;
