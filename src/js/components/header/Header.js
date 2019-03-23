import React from 'react';
import userTypes from '../../constants/userTypes';
import Logo from './Logo';
import Navbar from './NavBar';
import Search from '../Search';
import SignContainer from '../../containers/SignContainer';
import LogOut from './LogOut';

export default function Header({ categories, currentUser, logOut }) {
  return (
    <header className='header'>
      <div className='header--left'>
        <Logo />
        <Navbar categories={categories} />
      </div>
      <div className='header--right'>
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
      </div>
    </header>
  );
}
