import React from 'react';
import PropTypes from 'prop-types';
import CategoriesWidget from './CategoriesWidget';
import PopularWidget from './PopularWidget';

export default function Sidebar({ articles = [], categories = [] }) {
  return articles.length || categories.length ? (
    <aside className='sidebar'>
      <div className='sidebar__widgets-wrapper'>
        <div className='sidebar__widgets'>
          {articles.length ? <PopularWidget articles={articles} /> : null}
          {categories.length ? (
            <CategoriesWidget categories={categories} />
          ) : null}
        </div>
      </div>
    </aside>
  ) : null;
}

Sidebar.propTypes = {
  categories: PropTypes.array,
  articles: PropTypes.array
};
