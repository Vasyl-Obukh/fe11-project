import React from 'react';
import PropTypes from 'prop-types';
import CategoriesWidget from './CategoriesWidget';
import PopularWidget from './PopularWidget';

export default function Sidebar({ articles = [], categories = [] }) {
  return (
    <aside className='sidebar'>
      <div className='sidebar__widgets'>
        <div className='sidebar__widget-wrapper'>
          <CategoriesWidget categories={categories} />
        </div>
        <div className='sidebar__widget-wrapper'>
          <PopularWidget articles={articles} />
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  categories: PropTypes.array,
  articles: PropTypes.array
};
