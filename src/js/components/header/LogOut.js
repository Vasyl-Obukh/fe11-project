import React from 'react';
import { Link } from 'react-router-dom';
import userTypes from '../../constants/userTypes';

export default function LogOut({ userType, userName, onLogOut }) {
  return (
    <div className='sign authorized'>
      {userType === userTypes.ADMIN ? (
        <Link to='/admin'>Admin panel</Link>
      ) : (
        <p>Howdy, {userName}</p>
      )}
      <p onClick={onLogOut}>Log out</p>
    </div>
  );
}
