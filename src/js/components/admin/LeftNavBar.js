import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftNavBar({ logOut, history }) {
  return (
    <>
      <input type='checkbox' id='burger' className='burger burger_admin' />
      <label htmlFor='burger'>
        <span />
        <span />
        <span />
        <span />
      </label>
      <ul className='nav-menu__list'>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin'
            exact
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin/articles'
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Articles
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin/categories'
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Categories
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin/comments'
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Comments
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin/users'
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Users
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to='/admin/settings'
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <div className='nav-menu__outs'>
        <i
          className='fas fa-arrow-circle-left nav-menu__btn'
          onClick={() => history.push('/')}
        />
        <i className='fas fa-sign-out-alt nav-menu__btn' onClick={logOut} />
      </div>
    </>
  );
}
