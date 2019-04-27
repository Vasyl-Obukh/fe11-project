import React from 'react';
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
  return (
    pageNotFound ? (
      <Redirect to={paths.ERROR_404} />
    ) : (
      <>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Sort sortType={sortType} changeSortType={changeSortType} />
      </div>
      {articles.map(article => <Article key={article.id} article={article} />)}
      <Pagination paginationSettings={paginationSettings} />
      </>
    )
  );
}
