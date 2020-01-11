import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default function Navbar({ categories }) {
  return (
    <ul className='header__navbar navbar'>
      <li className='navbar__item navbar__item_primary'>
        <Link to={paths.MAIN_FIRST_PAGE}>Home</Link>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <span>Categories</span>
        <ul className='navbar navbar_nested'>
          {categories.map(({ name, id }) => (
            <li key={id} className='navbar__item navbar__item_nested'>
              <Link to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, name)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <Link to={paths.ABOUT_US}>About us</Link>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <Link to={paths.CONTACT_US}>Contact us</Link>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    })
  )
};
