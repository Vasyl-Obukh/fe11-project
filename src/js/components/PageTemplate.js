import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';

export default function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <main className='main'>
        {children}
      </main>
      <SideBar />
      <Footer />
    </>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.object.isRequired
};