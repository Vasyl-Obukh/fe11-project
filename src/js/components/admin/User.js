import React from 'react';

export default function User({ user }) {
  //console.log('shit')
  return (
    <div className='admin-user'>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
}
