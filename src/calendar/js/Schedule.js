import React from 'react';

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

  dateFormating = date => `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;

  render() {
    const { item, schedule } = this.state;
    const { date } = this.props;
    const stateDate = this.dateFormating(date);
    const schdulelist = schedule.map((v) => {
      if (this.dateFormating(v.date) === stateDate) {
        return <li key={v.index}>{v.item}</li>;
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

export default Schedule;
