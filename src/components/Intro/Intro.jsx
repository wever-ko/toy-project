import React from 'react';
import './Intro.css';

class Intro extends React.Component {
  state = {
    name: '',
    email: '',
  };

  onChangeName = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  }

  onChangeEmail = ({ target: { value } }) => {
    this.setState({
      email: value,
    });
  }

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="container">
        <div className="block">
          <div>enter your name </div>
          <input
            className="input"
            type="text"
            value={name}
            onChange={this.onChangeName}
          />
        </div>
        <div className="block">
          <div>enter your email</div>
          <input
            className="input"
            type="email"
            value={email}
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
