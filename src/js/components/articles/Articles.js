import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import { Redirect } from 'react-router-dom';
import Pagination from '../other/Pagination';
import Sort from '../other/Sort';
import Breadcrumbs from '../other/Breadcrumbs';
import paths from '../../constants/paths';

export default function Articles({
  articles,
  pageNotFound,
  paginationSettings,
  changeSortType,
  sortType,
  breadcrumbs
}) {
  return pageNotFound ? (
    <Redirect to={paths.ERROR_404} />
  ) : (
    <>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Sort sortType={sortType} changeSortType={changeSortType} />
      </div>
      {articles.length ? (
        articles.map(article => <Article key={article.id} article={article} />)
      ) : (
        <h2 className='absence'>{'There\'s no articles here yet'}</h2>
      )}
      <Pagination paginationSettings={paginationSettings} />
    </>
  );
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  pageNotFound: PropTypes.bool.isRequired,
  paginationSettings: PropTypes.object.isRequired,
  changeSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired
};
