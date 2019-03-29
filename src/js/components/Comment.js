import React from 'react';
import formatDate from '../formatDate';

export default function Comment({ comment }) {
  return (
    <div className='comment'>
      <div className='comment--header'>
        <span>{comment.userName}</span>
        <span>{formatDate(comment.date, true)}</span>
      </div>
      <div className='comment--text'>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}
