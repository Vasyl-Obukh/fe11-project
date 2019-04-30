import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PopularWidget({ articles = [] }) {
  return (
    <div className='widget-popular'>
      <h3 className='widget-popular__title'>Popular</h3>
      <ul className='widget-popular__list'>
        {articles.map(article => (
          <li className='widget-popular__item' key={article.id}>
            <Link className='widget-popular__img-container' to={`/articles/${article.id}`}>
              <div
                role='img'
                style={{ backgroundImage: `url(${article.thumbnailUrl})` }}
                className='widget-popular__thumb'
              />
            </Link>
            <h4 className='widget-popular__post-title' title={article.title}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </h4>
            <p className='widget-popular__overview'>
              {article.overview.length > 100
                ? article.overview.slice(0, 100) + '...'
                : article.overview}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

PopularWidget.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string
    })
  )
};
