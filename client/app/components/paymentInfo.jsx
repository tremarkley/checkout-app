import React from 'react';
import PropTypes from 'prop-types';

const paymentInfo = props => (
  <div className="popup">
    <p>Payment Info</p>
    <button onClick={props.clickNext}>Next</button>
  </div>
);

paymentInfo.propTypes = {
  clickNext: PropTypes.func.isRequired,
};

export default paymentInfo;
