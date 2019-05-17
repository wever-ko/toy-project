import React from 'react';
import PropTypes from 'prop-types';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      schedule: (() => {
        const schedule = localStorage.getItem('scheduleList');
        return (schedule === null) ? [] : JSON.parse(schedule);
      })(),
    };
    this.id = (() => {
      const id = localStorage.getItem('id');
      return (id === null) ? 0 : JSON.parse(id);
    })();
  }

  handleAddSchedule = () => {
    const { item, schedule } = this.state;
    const { date } = this.props;
    const list = {
      id: this.id,
      date,
      ...{ item },
    };

    const scheduleList = schedule.concat(list);

    this.setState({
      item: '',
      schedule: scheduleList,
    });

    console.log(scheduleList);

    localStorage.setItem('id', JSON.stringify(this.id));
    localStorage.setItem('scheduleList', JSON.stringify(scheduleList));
    this.id += 1;
  }

  handleInputChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  }

  render() {
    const { item, schedule } = this.state;
    const { date: propsDate } = this.props;
    const schduleList = schedule.map(({ date: listDate, id: listId, item: listItem }) => {
      if (listDate === propsDate) {
        return <li key={listId}>{listItem}</li>;
      }
    });

    return (
      <>
        <input
          placeholder="일정입력"
          value={item}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          onClick={this.handleAddSchedule}
        >
          입력
        </button>
        <ul>
          {schduleList}
        </ul>
      </>
    );
  }
}

Schedule.propTypes = { date: PropTypes.string.isRequired };

export default Schedule;
