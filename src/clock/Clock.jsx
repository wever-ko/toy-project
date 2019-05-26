import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockData: {
        year: '----',
        month: '--',
        day: '--',
        hour: '--',
        minute: '--',
      },
    };
  }

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  timeToString = timeNum => ((timeNum < 10) ? `0${timeNum.toString()}` : timeNum.toString());

  setTime = () => {
    const time = new Date();
    const { clockData } = this.state;
    const currentTime = new Map([
      ['year', this.timeToString(time.getFullYear())],
      ['month', this.timeToString(time.getMonth() + 1)],
      ['day', this.timeToString(time.getDate())],
      ['hour', this.timeToString(time.getHours())],
      ['minute', this.timeToString(time.getMinutes())],
    ]);

    let isTimeChange = false;

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of currentTime.entries()) {
      if (clockData[key] !== value) {
        isTimeChange = true;
        clockData[key] = value;
      }
    }

    if (isTimeChange) {
      this.setState({
        ...clockData,
      });
    }
  }

  render() {
    const { clockData } = this.state;
    const {
      year, month, day, hour, minute,
    } = clockData;

    const clockTime = `${hour} : ${minute}`;
    const clockDate = `${year} / ${month} / ${day}`;

    return (
      <>
        <div>{clockTime}</div>
        <div>{clockDate}</div>
      </>
    );
  }
}

export default Clock;
