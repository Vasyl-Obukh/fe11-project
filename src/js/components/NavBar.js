import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li className='navbar--item'>
        <NavLink to='/' >
          Home
        </NavLink>
      </li>
      <li className='navbar--item'>
        <NavLink to='/categories' >
          Categories
        </NavLink>
        <ul className='nested-list'>
          <li className='nested-list--item'>
            <NavLink to='/category'>
              Category
            </NavLink>
          </li>
          <li className='nested-list--item'>
            <NavLink to='/category'>
              Category
            </NavLink>
          </li>
          <li className='nested-list--item'>
            <NavLink to='/category'>
              Category
            </NavLink>
          </li>
        </ul>
      </li>
      <li className='navbar--item'>
        <NavLink to='/about-us' >
          About us
        </NavLink>
      </li>
      <li className='navbar--item'>
        <NavLink to='/contact-us' >
          Contact us
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;