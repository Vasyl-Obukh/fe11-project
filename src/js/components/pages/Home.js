import React from 'react';
import PageTemplate from '../PageTemplate';
import VisibleArticles from '../../containers/VisibleArticles';
import { Route } from 'react-router-dom';
import ArticlesContainer from '../../containers/ArticlesContainer';

export default function Home(props) {
  return (
    <PageTemplate>
      {/* <Route path='/' component={ArticlesContainer} /> */}
      <ArticlesContainer />
      {/* <VisibleArticles /> */}
    </PageTemplate>
  );
}
