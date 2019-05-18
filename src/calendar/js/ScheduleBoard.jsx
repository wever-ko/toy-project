import React from 'react';
import PropTypes from 'prop-types';
import Schedule from './Schedule';
import ScheduleListItem from './ScheduleListItem';

class ScheduleBoard extends React.Component {
  constructor(props) {
    super(props);
    this.schedule = new Schedule();
    this.state = {
      newItem: '',
      scheduleList: this.schedule.get(),
    };
  }

  handleAddSchedule = () => {
    const { newItem } = this.state;
    const { date } = this.props;

    this.schedule.add(date, newItem);

    this.setState({
      newItem: '',
      scheduleList: this.schedule.get(),
    });
  }

  handleDeleteSchedule = (id) => {
    this.schedule.delete(id);

    this.setState({
      scheduleList: this.schedule.get(),
    });
  }

  handleInputChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  }

  render() {
    const { newItem, scheduleList } = this.state;
    const { date: propsDate } = this.props;
    const list = scheduleList
      .filter(({ date }) => date === propsDate)
      .map(({ id: listId, item: listItem }) => (
        <ScheduleListItem
          key={`item-${listId}`}
          onClick={this.handleDeleteSchedule}
          id={listId}
        >
          {listItem}
        </ScheduleListItem>
      ));

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
          {list}
        </ul>
      </>
    );
  }
}

ScheduleBoard.propTypes = { date: PropTypes.string.isRequired };

export default ScheduleBoard;
