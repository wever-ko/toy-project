import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import Schedule from './js/Schedule';
import './css/Calendar.css';

class Calendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    const { date } = this.state;
    return (
      <>
        <ReactCalendar
          calendarType="US"
          onChange={this.onChange}
          value={date}
        />
        <Schedule
          date={date}
        />
      </>
    );
  }
}

export default Calendar;
