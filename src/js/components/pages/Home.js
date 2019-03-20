import React from 'react';
import PageTemplate from '../PageTemplate';
import VisibleArticles from '../../containers/VisibleArticles';

export default function Home() {
  return (
    <PageTemplate>
      <VisibleArticles />
    </PageTemplate>
  );
}

