import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import ScheduleBoard from './js/ScheduleBoard';
import './css/Calendar.css';

class Calendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  dateFormating = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  render() {
    const { date } = this.state;
    return (
      <>
        <ReactCalendar
          calendarType="US"
          onChange={this.onChange}
          value={date}
        />
        <ScheduleBoard
          date={this.dateFormating(date)}
        />
      </>
    );
  }
}

export default Calendar;
