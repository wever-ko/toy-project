import React from 'react';
import CharacterizedTime from './js/CharacterizedTime';
import './css/Clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const initTime = new CharacterizedTime(new Date());
    this.state = {
      clockData: initTime,
    };
  }

  componentDidMount() {
    setInterval(this.timeUpdate(), 1000);
  }

  timeUpdate = () => {
    const { clockData } = this.state;
    const currentTime = new CharacterizedTime(new Date());

    if (clockData !== currentTime) {
      this.setState({
        clockData: currentTime,
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
      <div className="clock">
        <div className="clock-time">{clockTime}</div>
        <div className="clock-date">{clockDate}</div>
      </div>
    );
  }
}

export default Clock;
