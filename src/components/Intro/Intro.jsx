import React from 'react';
import './Intro.scss';

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
        <div className="intro-title"> Welcome To Momentum </div>
        <form>
          <div className="block">
            <input
              className="input"
              type="text"
              value={name}
              placeholder="enter your name"
              onChange={this.onChangeName}
            />
          </div>
          <div className="block">
            <input
              className="input"
              type="email"
              value={email}
              placeholder="enter your email"
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
        </form>
      </div>
    );
  }
}

export default Intro;
