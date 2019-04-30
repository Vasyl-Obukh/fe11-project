import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utilities';
import paths from '../../constants/paths';

export default function Article({
  article: {
    id,
    title,
    categoriesName,
    date,
    thumbnailUrl,
    overview,
    commentsNumber
  }
}) {
  return (
    <article className='article'>
      <h2 className='article__title'>
        <Link to={paths.ARTICLE_PAGE.replace(/:\w*/, id)}>{title}</Link>
      </h2>

      <div className='article__head'>
        <div className='article__categories'>
          <span>Categories: </span>
          {categoriesName.length
            ? categoriesName.map((category, id) => {
              return (
                <Link
                  className='article__category'
                  key={id}
                  to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, category)}
                >
                  {category}
                </Link>
              );
            })
            : <span>none</span>}
        </div>

        <div className='article__date'>
          <span>{formatDate(date)}</span>
        </div>
      </div>

      <div
        role='img'
        className='article__thumbnail'
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />

      <div className='article__overview'>
        <p>{overview}</p>
      </div>

      <div className='article__footer'>
        <span className='article__comments-number'>
          <i className='far fa-comments' /> {commentsNumber}
        </span>
        <Link
          className='article__ref'
          to={paths.ARTICLE_PAGE.replace(/:\w*/, id)}
        >
          Read more...
        </Link>
      </div>
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoriesName: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    commentsNumber: PropTypes.number.isRequired
  })
};
