import React from 'react';
import CharacterizedTime from './js/CharacterizedTime';
import './css/Clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const initTime = CharacterizedTime(new Date());
    this.state = {
      clockData: initTime,
    };
  }

  componentDidMount() {
    setInterval(this.timeUpdate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdate);
  }

  timeUpdate = () => {
    const { clockData } = this.state;
    const currentTime = CharacterizedTime(new Date());

    if (clockData !== currentTime) {
      this.setState({
        clockData: currentTime,
      });
    }
  }

  render() {
    const {
      clockData: {
        year, month, day, hour, minute,
      },
    } = this.state;

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
