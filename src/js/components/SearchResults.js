import React from 'react';
import Article from './articles/Article';
import Pagination from './Pagination';

export default function SearchResults({query, articles, paginationSettings}) {
  return (
    <>
      <h2 className='main__search-result'>{`Search results "${query}"`}</h2>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
      <Pagination paginationSettings={paginationSettings} />
    </>
  );
}
