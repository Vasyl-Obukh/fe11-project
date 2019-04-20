import React from 'react';

export default function Users({ users }) {
  return (
    <ul className='users-list'>
      {users.map(user => (
        <li key={user.id} className='users-list__item'>
          <span className='users-list__name'>{user.name}</span>
          <span className='users-list__email'>{user.email}</span>
        </li>
      ))}
    </ul>
  );
}
