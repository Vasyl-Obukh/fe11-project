import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to='/'>
        <i className='fab fa-blogger-b logo__img' />
      </Link>
    </div>
  );
}
