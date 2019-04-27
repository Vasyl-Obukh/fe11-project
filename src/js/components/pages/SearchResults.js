import React from 'react';
import PropTypes from 'prop-types';
import Article from '../articles/Article';
import Pagination from '../other/Pagination';

export default function SearchResults({ query, articles, paginationSettings }) {
  return (
    <>
      <h2 className='main__search-result'>{`Search results for "${query}"`}</h2>
      {articles.length ? articles.map(article => (
        <Article key={article.id} article={article} />
      )) : (
        <h3>{'There\'s no posts with such tags, checkout the input and try again'}</h3>
      )}
      <Pagination paginationSettings={paginationSettings} />
    </>
  );
}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
  paginationSettings: PropTypes.object.isRequired
};
