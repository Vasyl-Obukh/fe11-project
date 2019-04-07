import React from 'react';
import Article from './articles/Article';

export default function SearchResults({query, articles}) {
  return (
    <>
      <h2>{`Search results "${query}"`}</h2>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
}
