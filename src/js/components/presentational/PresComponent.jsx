import React from 'react';
import PropTypes from 'prop-types';
import '../../../sass/style.sass'; 

const PresComponent = ({ value }) => (
  <h1>{value}</h1>
);

PresComponent.propTypes = {
  value: PropTypes.string.isRequired
};
export default PresComponent;