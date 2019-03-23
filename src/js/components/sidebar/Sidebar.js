import React from 'react';
import CategoriesWidget from './CategoriesWidget';

export default function SideBar({ articles, categories }) {
  return (
    <aside className='sidebar'>
      <CategoriesWidget categories={categories} />
    </aside>
  );
}
