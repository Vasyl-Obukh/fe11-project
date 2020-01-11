import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default function Error404() {
  return (
    <div className='error-page'>
      <div className='error-page__content'>
        <h1 className='error-page__message'>Page not found</h1>
        <Link className='error-page__link' to={paths.MAIN_FIRST_PAGE}>
          <i className='fas fa-home error-page__icon' />
          <span className='error-page__text'>Go back</span>
        </Link>
      </div>
    </div>
  );
}
