import React from 'react';
import CategoriesWidget from './CategoriesWidget';
import MostCommentdWidget from './MostCommentedWidget';

export default function SideBar({ articles, categories }) {
  return (
    <aside className='sidebar'>
      <div className='widgets-wrapper'>
        <div className='widgets-list'>
          <div className='widget'>
            <CategoriesWidget categories={categories} />
          </div>
          <div className='widget'>
            <MostCommentdWidget articles={articles} />
          </div>
        </div>
      </div>
    </aside>
  );
}
