import React from 'react';
import formatDate from '../formatDate';

export default function Comment({ comment }) {
  return (
    <li className='comment'>
      <div className='comment__header'>
        <span className='comment__name'>{comment.userName}</span>
        <span className='comment__date' >{formatDate(comment.date, true)}</span>
      </div>
      <p className='comment__text'>{comment.text}</p>
    </li>
  );
}
