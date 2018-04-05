import React from 'react';
import PropTypes from 'prop-types';

class paymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      expiryDate: '',
      CVV: '',
      zipCode: '',
    };
    this.clickNext = this.clickNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    const nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  }

  clickNext() {
    this.props.setPaymentInfo(this.state);
    this.props.nextForm();
  }

  render() {
    return (
      <div className="popup">
        <p>Payment Info</p>
        <label htmlFor="creditCardNumber">
          Credit Card Number:
          <input id="creditCardNumber" type="text" value={this.state.creditCardNumber} onChange={event => this.handleChange(event, 'creditCardNumber')} />
        </label>
        <label htmlFor="expiryDate">
          Expiration Date:
          <input id="expiryDate" type="text" value={this.state.expiryDate} onChange={event => this.handleChange(event, 'expiryDate')} />
        </label>
        <label htmlFor="cvv">
          CVV:
          <input id="cvv" type="text" value={this.state.CVV} onChange={event => this.handleChange(event, 'CVV')} />
        </label>
        <label htmlFor="zipcode">
          Zip Code:
          <input id="zipcode" type="text" value={this.state.zipCode} onChange={event => this.handleChange(event, 'zipCode')} />
        </label>
        <button onClick={this.clickNext}>Next</button>
      </div>
    );
  }
}

paymentInfo.propTypes = {
  nextForm: PropTypes.func.isRequired,
  setPaymentInfo: PropTypes.func.isRequired,
};

export default paymentInfo;
