import React from 'react';
import PageTemplate from './PageTemplate';
import VisibleArticles from '../containers/VisibleArticles';

const Home = () => {
  return (
    <PageTemplate>
      <VisibleArticles />
    </PageTemplate>
  );
};

export default Home;
