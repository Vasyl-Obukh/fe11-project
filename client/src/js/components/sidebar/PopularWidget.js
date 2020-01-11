import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default function PopularWidget({ articles = [] }) {
  return (
    <div className='widget-popular'>
      <h3 className='widget-popular__title'>Popular</h3>
      <ul className='widget-popular__list'>
        {articles.map(_ => (
          <li className='widget-popular__item' key={_.id}>
            <Link
              className='widget-popular__img-container'
              to={paths.ARTICLE_PAGE.replace(/:\w*$/, _.id)}
            >
              <div
                style={{ backgroundImage: `url(${_.thumbnailUrl})` }}
                className='widget-popular__thumb'
              />
            </Link>
            <h4 className='widget-popular__post-title' title={_.title}>
              <Link to={paths.ARTICLE_PAGE.replace(/:\w*$/, _.id)}>
                {_.title}
              </Link>
            </h4>
            <p className='widget-popular__overview'>
              {_.overview.length > 100
                ? _.overview.slice(0, 100) + '...'
                : _.overview}
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
