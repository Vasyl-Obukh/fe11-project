import React from 'react';
import PageTemplate from '../PageTemplate';
import ArticlesContainer from '../../containers/ArticlesContainer';
import paths from '../../constants/paths';

export default function Home () {
  return (
    <PageTemplate>
      <ArticlesContainer />
    </PageTemplate>
  );
}
