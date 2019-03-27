import React from 'react';
import User from './User';

export default function Users({ users }) {
  return (
    <div className='admin-users'>
      {users.map(user => (
        <div key={user.id} className='admin-user'>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
  );
}
