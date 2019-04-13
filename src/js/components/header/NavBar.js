import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ categories }) => {
  return (
    <ul className='navbar'>
      <li className='navbar__item navbar__item_primary'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <span>Categories</span>
        <ul className='navbar navbar_nested'>
          {categories.map(({ name, id }) => (
            <li key={id} className='navbar__item navbar__item_nested'>
              <Link to={`/categories/${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <NavLink to='/about-us'>About us</NavLink>
      </li>
      <li className='navbar__item navbar__item_primary'>
        <NavLink to='/contact-us'>Contact us</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
