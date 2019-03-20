import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ categories }) => {
  return (
    <ul className='navbar'>
      <li className='navbar--item'>
        <NavLink to='/' >
          Home
        </NavLink>
      </li>
      <li className='navbar--item'>
        <NavLink to='/' >
          Categories
        </NavLink>
        <ul className='nested-list'>
          {categories.map(({name, id}) => <li key={id} className='nested-list--item'><Link to={`/categories/${name}`}>{name}</Link></li>)}
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