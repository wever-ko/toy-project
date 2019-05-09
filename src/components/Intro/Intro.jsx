import React from 'react';
import './Intro.css';

class Intro extends React.Component {
  state = {
    name: '',
    email: '',
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const ref = this.state;
    return (
      <div className="container">
        <div className="block">
          <div>enter your name </div>
          <input
            className="input"
            type="text"
            value={ref.name}
            onChange={this.onChangeName}
          />
        </div>
        <div className="block">
          <div>enter your email</div>
          <input
            className="input"
            type="email"
            value={ref.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <button
          className="button"
          type="submit"
          onClick={this.onSubmit}
        >
          확인
        </button>
      </div>
    );
  }
}

export default Intro;
