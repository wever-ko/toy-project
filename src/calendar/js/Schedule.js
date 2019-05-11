import React from 'react';

class Schedule extends React.Component {
  index = 0;

  state = {
    item: '',
    schedule: [],
  }

  handleAddSchedule = () => {
    const { date } = this.props;
    const { item, schedule } = this.state;
    const list = {
      index: this.index,
      date: { date },
      ...{ item },
    };

    this.setState({
      schedule: schedule.concat(list),
    });

    this.setState({
      item: '',
    });

    this.index += 1;
  }

  handleInputChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  }

  render() {
    const { date } = this.props;
    const { item, schedule } = this.state;
    const list = schedule.map((v) => {
      if (v.date.date === { date }.date) {
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
        {list}
      </>
    );
  }
}

export default Schedule;
