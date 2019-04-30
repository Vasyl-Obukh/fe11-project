import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import Burger from '../header/Burger';
import paths from '../../constants/paths';

function NavBar({ logOut, history }) {
  return (
    <>
      <Burger />
      <ul className='nav-menu__list'>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_PANEL}
            exact
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_ARTICLES}
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Articles
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_CATEGORIES}
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Categories
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_COMMENTS}
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Comments
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_USERS}
            activeClassName='nav-menu__link_active'
            className='nav-menu__link'
          >
            Users
          </NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink
            to={paths.ADMIN_SETTINGS}
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
          onClick={() => history.push(paths.MAIN_FIRST_PAGE)}
        />
        <i className='fas fa-sign-out-alt nav-menu__btn' onClick={logOut} />
      </div>
    </>
  );
}

NavBar.propTypes = {
  logOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(NavBar);
