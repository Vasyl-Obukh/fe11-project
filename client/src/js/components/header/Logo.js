import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to={paths.MAIN_FIRST_PAGE}>
        <i className='fab fa-blogger-b logo__img' />
      </Link>
    </div>
  );
}
