import React from 'react';
import Logo from '../components/Logo';
import SignIn from '../components/SignIn';

export default function Header() {
  return (
    <header>
      <Logo />
      <SignIn />
    </header>
  );
}