import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import './css/Calendar.css';

class Calendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    const { date } = this.state;
    return (
      <div>
        <ReactCalendar
          calendarType="US"
          onChange={this.onChange}
          value={date}
        />
      </div>
    );
  }
}

export default Calendar;
