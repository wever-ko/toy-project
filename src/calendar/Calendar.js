import React, { Component } from 'react'
import Calendar from 'react-calendar'
import './css/Calendar.css'

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return(
      <div>
        <Calendar
          calendarType="US"
          onChange={this.onChange}
          value={this.state.date}>
        </Calendar>
      </div>
    );
  }
}

export default MyApp