import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../other/Burger';
import Logo from './Logo';
import Navbar from './NavBar';
import Search from './Search';
import Sign from '../../containers/Sign';
import LogOut from './LogOut';
import userTypes from '../../constants/userTypes';

export default function Header({
  categories = [],
  currentUser = userTypes.NON_AUTHORIZED,
  logOut
}) {
  return (
    <header className='header header_fixed'>
      <Burger />
      <Logo />
      <Navbar categories={categories} />
      <Search />
      {currentUser.userType === userTypes.NON_AUTHORIZED ? (
        <Sign />
      ) : (
        <LogOut
          userType={currentUser.userType}
          onLogOut={logOut}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  currentUser: PropTypes.shape({
    userType: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  logOut: PropTypes.func.isRequired
};
