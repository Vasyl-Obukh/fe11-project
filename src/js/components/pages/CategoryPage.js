import React from 'react';
import PageTemplate from '../PageTemplate';
import VisibleArticles from '../../containers/VisibleArticles';

const CategoryPage = () => {
  return (
    <PageTemplate>
      <VisibleArticles />
    </PageTemplate>
  );
};

export default CategoryPage;
