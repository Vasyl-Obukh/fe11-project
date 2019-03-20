import React from 'react';
import CategoriesWidget from './CategoriesWidget';

const SideBar = ({articles, categories}) => {
  return (
    <aside className='sidebar'>
      <CategoriesWidget categories={categories} />
    </aside>
  );
};

export default SideBar;
