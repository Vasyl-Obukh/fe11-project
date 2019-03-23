import React from 'react';
import PageTemplate from '../PageTemplate';
import VisibleArticles from '../../containers/VisibleArticles';

export default function CategoryPage() {
  return (
    <PageTemplate>
      <VisibleArticles />
    </PageTemplate>
  );
}
