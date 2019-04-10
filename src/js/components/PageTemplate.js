import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SliderContainer from '../containers/SliderContainer';
import SidebarContainer from '../containers/SidebarContainer';
import FooterContainer from '../containers/FooterContainer';

export default function PageTemplate({ children }) {
  return (
    <>
      <HeaderContainer />
      <SliderContainer />
      <main className='main'>
        {children}
      </main>
      <SidebarContainer />
      <FooterContainer />
    </>
  );
}
