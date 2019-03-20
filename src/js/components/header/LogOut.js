import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = ({userName, onLogOut}) => {
  return (
    <div className='sign'>
      <Link to='/admin'>Go to admin panel</Link>
      <button onClick={onLogOut}>Log out</button>
    </div>
  );
};

export default LogOut;