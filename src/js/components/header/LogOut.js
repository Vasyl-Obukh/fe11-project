import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import userTypes from '../../constants/userTypes';

export default function LogOut({ userType, onLogOut }) {
  return (
    <div className='sign sign_authorized'>
      {userType === userTypes.ADMIN ? (
        <Link className='sign__admin' to='/admin' title='To admin panel'>
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
  userType: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired
};
