import React from 'react';
import PropTypes from 'prop-types';
import CategoriesWidget from './CategoriesWidget';
import PopularWidget from './PopularWidget';

export default function Sidebar({ articles = [], categories = [] }) {
  return articles.length && categories.length ? (
    <aside className='sidebar'>
      <div className='sidebar__widgets'>
        {articles.length ? (
          <div className='sidebar__widget-wrapper'>
            <PopularWidget articles={articles} />
          </div>
        ) : null}
        {categories.length ? (
          <div className='sidebar__widget-wrapper'>
            <CategoriesWidget categories={categories} />
          </div>
        ) : null}
      </div>
    </aside>
  ) : null;
}

Sidebar.propTypes = {
  categories: PropTypes.array,
  articles: PropTypes.array
};
