import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SliderContainer from '../containers/SliderContainer';
import SideBarContainer from '../containers/SidebarContainer';
import Footer from './footer/Footer';

export default function PageTemplate({ children }) {
  return (
    <>
      <HeaderContainer />
      <SliderContainer />
      <main className='main'>
        {children}
      </main>
      <SideBarContainer />
      <Footer />
    </>
  );
}
