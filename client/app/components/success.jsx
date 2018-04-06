import React from 'react';
import PropTypes from 'prop-types';

const success = props => (
  <div className="popup">
    <p>Successful Checkout!</p>
    <div>
      <h1>Contact Information</h1>
      <p>Name: {props.accountInfo.name}</p>
      <p>Email: {props.accountInfo.email}</p>
    </div>
    <div>
      <h1>Shipping Information</h1>
      <p>Address:</p>
      <p>{props.contactInfo.addressLine1}</p>
      {props.contactInfo.addressLine2.length > 0 ? <p>{props.contactInfo.addressLine2}</p> : null}
      <p>{props.contactInfo.city}, {props.contactInfo.state} {props.contactInfo.zipCode}</p>
    </div>
    <div>
      <h1>Payment Information</h1>
      <p>Credit Card Number: {props.paymentInfo.creditCardNumber}</p>
      <p>Expiration Date: {props.paymentInfo.expiryDate}</p>
      <p>CVV: {props.paymentInfo.CVV}</p>
      <p>Zip Code: {props.paymentInfo.zipCode}</p>
    </div>
    <button onClick={props.exitCheckout}>Purchase</button>
  </div>
);

success.propTypes = {
  exitCheckout: PropTypes.func.isRequired,
  accountInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  contactInfo: PropTypes.shape({
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
  paymentInfo: PropTypes.shape({
    creditCardNumber: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    CVV: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default success;
