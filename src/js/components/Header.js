import React from 'react';
import Logo from './Logo';
import Sign from './Sign';
import Navbar from './NavBar';
import Search from './Search';

const Header = () => {
  return (
    <header className='header'>
      <div className='header--left'>
        <Logo />
        <Navbar />
      </div>
      <div className='header--right'>
        <Search />
        <Sign />
      </div>
    </header>
  );
};

export default Header;