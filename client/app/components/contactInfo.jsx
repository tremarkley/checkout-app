import React from 'react';
import PropTypes from 'prop-types';

class contactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  handleChange(event, field) {
    const nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  }

  clickNext() {
    this.props.setContactInfo(this.state);
    this.props.nextForm();
  }

  render() {
    return (
      <div className="popup">
        <p>Contact Information</p>
        <label htmlFor="addressLine1">
          Address Line 1:
          <input id="addressLine1" type="text" value={this.state.addressLine1} onChange={event => this.handleChange(event, 'addressLine1')} />
        </label>
        <label htmlFor="addressLine2">
          Address Line 2:
          <input id="addressLine2" type="text" value={this.state.addressLine2} onChange={event => this.handleChange(event, 'addressLine2')} />
        </label>
        <label htmlFor="city">
          City:
          <input id="city" type="text" value={this.state.city} onChange={event => this.handleChange(event, 'city')} />
        </label>
        <label htmlFor="state">
          State:
          <input id="state" type="text" value={this.state.state} onChange={event => this.handleChange(event, 'state')} />
        </label>
        <label htmlFor="zipcode">
          Zip Code:
          <input id="zipcode" type="text" value={this.state.zipCode} onChange={event => this.handleChange(event, 'zipCode')} />
        </label>
        <label htmlFor="phonenumber">
          Phone Number:
          <input id="phonenumber" type="text" value={this.state.phoneNumber} onChange={event => this.handleChange(event, 'phoneNumber')} />
        </label>
        <button onClick={this.clickNext}>Next</button>
      </div>
    );
  }
}


contactInfo.propTypes = {
  nextForm: PropTypes.func.isRequired,
  setContactInfo: PropTypes.func.isRequired,
};

export default contactInfo;
