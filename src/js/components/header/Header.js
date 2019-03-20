import React from 'react';
import Logo from './Logo';
import Sign from '../Sign';
import LogOut from './LogOut';
import Navbar from './NavBar';
import Search from '../Search';
import userTypes from '../../constants/userTypes';

export default function Header({ categories, currentUser, logOut }) {
  return (
    <header className='header'>
      <div className='header--left'>
        <Logo />
        <Navbar categories={categories} />
      </div>
      <div className='header--right'>
        <Search />
        {currentUser.userType === userTypes.NON_AUTHORIZED ? <Sign /> : <LogOut userName={currentUser.name} onLogOut={logOut} /> }
      </div>
    </header>
  );
}