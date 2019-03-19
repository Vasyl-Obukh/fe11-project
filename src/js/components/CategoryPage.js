import React from 'react';
import PageTemplate from './PageTemplate';
import CategoryContainer from '../containers/CategoryContainer';

const Category = ({match: {params: { categoryName }}}) => {
  return (
    <PageTemplate>
      <CategoryContainer categoryName={categoryName} />
    </PageTemplate>
  );
};

export default Category;
