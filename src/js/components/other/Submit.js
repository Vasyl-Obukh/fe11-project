import React from 'react';
import PropTypes from 'prop-types';

export default function Submit({ text = 'Submit' }) {
  return (
    <button className='btn btn_submit' type='submit'>
      {text}
    </button>
  );
}

Submit.propTypes = {
  text: PropTypes.string
};
