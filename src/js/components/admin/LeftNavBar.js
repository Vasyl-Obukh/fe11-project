import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftNavBar(props) {
  return (
    <div className='inner'>
      <ul className='nav-menu'>
        <li className='nav-menu--item'>
          <NavLink to='/admin' exact activeClassName='nav-active'>
            Home
          </NavLink>
        </li>
        <li className='nav-menu--item'>
          <NavLink to='/admin/pages' activeClassName='nav-active'>
            Pages
          </NavLink>
        </li>
        <li className='nav-menu--item'>
          <NavLink to='/admin/articles' activeClassName='nav-active'>
            Articles
          </NavLink>
        </li>
        <li className='nav-menu--item'>
          <NavLink to='/admin/categories' activeClassName='nav-active'>
            Categories
          </NavLink>
        </li>
        <li className='nav-menu--item'>
          <NavLink to='/admin/comments' activeClassName='nav-active'>
            Comments
          </NavLink>
        </li>
        <li className='nav-menu--item'>
          <NavLink to='/admin/users' activeClassName='nav-active'>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
    
  );
}
