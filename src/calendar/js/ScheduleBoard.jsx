import React from 'react';
import PropTypes from 'prop-types';

class ScheduleBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
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
    const { newItem, schedule } = this.state;
    const { date } = this.props;
    const list = {
      id: this.id,
      date,
      item: newItem,
    };

    const scheduleList = schedule.concat(list);

    this.setState({
      newItem: '',
      schedule: scheduleList,
    });

    localStorage.setItem('id', JSON.stringify(this.id));
    localStorage.setItem('scheduleList', JSON.stringify(scheduleList));
    this.id += 1;
  }

  handleInputChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  }

  render() {
    const { newItem, schedule } = this.state;
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
          value={newItem}
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

ScheduleBoard.propTypes = { date: PropTypes.string.isRequired };

export default ScheduleBoard;
