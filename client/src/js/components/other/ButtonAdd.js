import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonAdd({ text, onClick }) {
  return (
    <button className='btn btn_add' onClick={onClick}>
      &#43; Add {text}
    </button>
  );
}

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
