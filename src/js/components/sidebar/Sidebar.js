import React from 'react';
import CategoriesWidget from './CategoriesWidget';
import MostCommentdWidget from './MostCommentedWidget';

export default function SideBar({ articles, categories }) {
  return (
    <aside className='sidebar'>
      <div className='sidebar__widgets'>
        <div className='sidebar__widget-wrapper'>
          <CategoriesWidget categories={categories} />
        </div>
        <div className='sidebar__widget-wrapper'>
          <MostCommentdWidget articles={articles} />
        </div>
      </div>
    </aside>
  );
}
