import React from 'react';
import PropTypes from 'prop-types';

export default function Users({ users = [] }) {
  return users.length ? (
    <ul className='users-list'>
      {users.map(_ => (
        <li key={_.id} className='users-list__item'>
          <span className='users-list__name'>{_.name}</span>
          <span className='users-list__email'>{_.email}</span>
        </li>
      ))}
    </ul>
  ) : (
    <h3>{'There\'s no users here yet'}</h3>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  )
};
