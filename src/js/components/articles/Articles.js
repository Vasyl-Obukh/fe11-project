import React from 'react';
import Article from './Article';
import { Redirect } from 'react-router-dom';
import Pagination from '../Pagination';
import Sort from '../Sort';
import Breadcrumbs from '../Breadcrumbs';
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
      {breadcrumbs ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : null}
      <Sort sortType={sortType} changeSortType={changeSortType} />
      {articles.map(article => <Article key={article.id} article={article} />)}
      <Pagination sortType={sortType} paginationSettings={paginationSettings} />
      </>
    )
  );
}
