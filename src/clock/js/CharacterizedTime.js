class CharacterizedTime {
  constructor(date) {
    this.time = {
      year: this.timeToString(date.getFullYear()),
      month: this.timeToString(date.getMonth() + 1),
      day: this.timeToString(date.getDate()),
      hour: this.timeToString(date.getHours()),
      minute: this.timeToString(date.getMinutes()),
    };
    return this.time;
  }

  timeToString = timeNum => ((timeNum < 10) ? `0${timeNum.toString()}` : timeNum.toString());
}


export default CharacterizedTime;
