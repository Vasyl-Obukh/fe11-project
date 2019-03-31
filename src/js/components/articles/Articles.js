import React from 'react';
import Article from './Article';
import { NavLink, Redirect } from 'react-router-dom';
import Pagination from '../Pagination';

export default function Articles({ articles, categories, articlesNotFound, pages }) {
  return (
    <>
      {articlesNotFound ? <Redirect to='/error-404' /> : null}
      {articles.map(article => (
        <Article
          key={article.id}
          article={article}
          categories={categories}
        />
      ))}
      <Pagination pages={pages} />
    </>
  );
}
