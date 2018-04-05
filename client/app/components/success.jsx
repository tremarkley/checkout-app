import React from 'react';
import PropTypes from 'prop-types';

const success = props => (
  <div className="popup">
    <p>Successful Checkout!</p>
    <button onClick={props.exitCheckout}>Return</button>
  </div>
);

success.propTypes = {
  exitCheckout: PropTypes.func.isRequired,
};

export default success;
