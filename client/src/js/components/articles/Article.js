import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utilities';
import paths from '../../constants/paths';

export default function Article({
  article: {
    _id,
    title,
    categoriesName,
    date,
    thumbnailUrl,
    overview,
    commentsId,
  }
}) {
  return (
    <article className='article'>
      <h2 className='article__title'>
        <Link to={paths.ARTICLE_PAGE.replace(/:\w*/, _id)}>{title}</Link>
      </h2>

      <div className='article__head'>
        <div className='article__categories'>
          <span>Categories: </span>
          {categoriesName.length ? (
            <div className='article__categories-list'>
              {categoriesName.map(({ _id, name }) => {
                return (
                  <Link
                    className='article__category'
                    key={_id}
                    to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, _id)}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <span>none</span>
          )}
        </div>

        <div className='article__date'>
          <span>{formatDate(date)}</span>
        </div>
      </div>

      <div
        className='article__thumbnail'
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />

      <div className='article__overview'>
        <p>{overview}</p>
      </div>

      <div className='article__footer'>
        <span className='article__comments-number'>
          <i className='far fa-comments' /> {commentsId.length}
        </span>
        <Link
          className='article__ref'
          to={paths.ARTICLE_PAGE.replace(/:\w*/, _id)}
        >
          Read more...
        </Link>
      </div>
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoriesName: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    })),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    commentsId: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
