import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import roles from '../../constants/roles';
import paths from '../../constants/paths';

export default function LogOut({ role, onLogOut }) {
  return (
    <div className='sign'>
      {role === roles.ADMIN ? (
        <Link className='sign__admin' to={paths.ADMIN_PANEL} title='To admin panel'>
          <i className='fas fa-user-cog sign__img' />
        </Link>
      ) : null}
      <div className='sign__out' onClick={onLogOut}>
        <i className='fas fa-sign-out-alt sign__img' />
        <span className='sign__text'>Log out</span>
      </div>
    </div>
  );
}

LogOut.propTypes = {
  role: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired
};
