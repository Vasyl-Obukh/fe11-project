import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import {
  HeaderContainer,
  SliderContainer,
  SidebarContainer,
  FooterContainer
} from '../containers/Template';
import ScrollTop from './other/ScrollTop';

export default function PageTemplate({ children }) {
  return (
    <>
      <HeaderContainer />
      <Route exact path='/' component={SliderContainer} />
      <main className='main'>{children}</main>
      <SidebarContainer />
      <FooterContainer />
      <ScrollTop />
    </>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node
};
