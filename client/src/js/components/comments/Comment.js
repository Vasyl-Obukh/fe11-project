import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utilities';

export default function Comment({ comment: { userName, date, text } }) {
  return (
    <li className='comment'>
      <div className='comment__header'>
        <span className='comment__name'>{userName}</span>
        <span className='comment__date'>{formatDate(date, true)}</span>
      </div>
      <p className='comment__text'>{text}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    text: PropTypes.string.isRequired
  })
};
