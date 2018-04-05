import React from 'react';
import PropTypes from 'prop-types';

const accountInfo = props => (
  <div className="popup">
    <p>Account Info</p>
    <button onClick={props.clickNext}>Next</button>
  </div>
);

accountInfo.propTypes = {
  clickNext: PropTypes.func.isRequired,
};

export default accountInfo;
