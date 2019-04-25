import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger';
import Logo from './Logo';
import Navbar from './NavBar';
import Search from '../Search';
import SignContainer from '../../containers/SignContainer';
import LogOut from './LogOut';
import userTypes from '../../constants/userTypes';

export default function Header({ categories = [], currentUser, logOut }) {
  return (
    <header className='header header_fixed'>
      <Burger />
      <Logo />
      <Navbar categories={categories} />
      <Search />
      {currentUser.userType === userTypes.NON_AUTHORIZED ? (
        <SignContainer />
      ) : (
        <LogOut
          userType={currentUser.userType}
          userName={currentUser.name}
          onLogOut={logOut}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  currentUser: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired,
  logOut: PropTypes.func.isRequired
};
