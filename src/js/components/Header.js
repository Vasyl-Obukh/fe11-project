import React from 'react';
import Logo from './Logo';
import Sign from './Sign';
import Navbar from './NavBar';
import Search from './Search';

const Header = () => {
  return (
    <header className='header'>
      <div className='header--top'>
        <Logo />
        <Sign />
      </div>
      <div className='header--navbar-search'>
        <Navbar />
        <Search />
      </div>
    </header>
  );
};

export default Header;