import React from 'react';
import Article from './Article';
import { Redirect } from 'react-router-dom';
import Pagination from '../Pagination';
import paths from '../../constants/paths';

export default function Articles({
  articles,
  pageNotFound,
  paginationSettings
}) {
  return (
    <>
      {pageNotFound ? (
        <Redirect to={paths.ERROR_404} />
      ) : (
        articles.map(article => <Article key={article.id} article={article} />)
      )}
      <Pagination paginationSettings={paginationSettings} />
    </>
  );
}
