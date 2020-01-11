import React from 'react';
import PropTypes from 'prop-types';

export default function Submit({ className, text = 'Submit' }) {
  return (
    <button className={`btn btn_submit ${className}`} type='submit'>
      {text}
    </button>
  );
}

Submit.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};
