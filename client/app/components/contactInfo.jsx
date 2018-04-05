import React from 'react';
import PropTypes from 'prop-types';

const contactInfo = props => (
  <div className="popup">
    <p>Contact Information</p>
    <button onClick={props.clickNext}>Next</button>
  </div>
);

contactInfo.propTypes = {
  clickNext: PropTypes.func.isRequired,
};

export default contactInfo;
