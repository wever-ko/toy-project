import React from 'react';
import PropTypes from 'prop-types';

class Schedule extends React.Component {
  index = 0;

  state = {
    item: '',
    schedule: [],
  }

  handleAddSchedule = () => {
    const { item, schedule } = this.state;
    const { date } = this.props;
    const list = {
      index: this.index,
      date,
      ...{ item },
    };

    this.setState({
      item: '',
      schedule: schedule.concat(list),
    });

    this.index += 1;
  }

  handleInputChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  }

  render() {
    const { item, schedule } = this.state;
    const { date: propsDate } = this.props;
    const schdulelist = schedule.map(({ date: listDate, index: listIndex, item: listItem }) => {
      if (listDate === propsDate) {
        return <li key={listIndex}>{listItem}</li>;
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
          {schdulelist}
        </ul>
      </>
    );
  }
}

Schedule.propTypes = { date: PropTypes.string.isRequired };

export default Schedule;
