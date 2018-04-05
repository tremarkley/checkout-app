import React from 'react';
import PropTypes from 'prop-types';

class accountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.nextClick = this.nextClick.bind(this);
  }

  handleChange(event, field) {
    const nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  }

  nextClick() {
    this.props.setAccountInfo(this.state);
    this.props.clickNext();
  }

  render() {
    return (
      <div className="popup">
        <p>Account Info</p>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={this.state.name} onChange={event => this.handleChange(event, 'name')} />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="text" value={this.state.email} onChange={event => this.handleChange(event, 'email')} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" value={this.state.password} onChange={event => this.handleChange(event, 'password')} />
        </label>
        <button onClick={this.nextClick}>Next</button>
      </div>
    );
  }
}

accountInfo.propTypes = {
  clickNext: PropTypes.func.isRequired,
  setAccountInfo: PropTypes.func.isRequired,
};

export default accountInfo;
