import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../formatDate';

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
        <Link to={`/articles/${id}`}>{title}</Link>
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
                  to={`/categories/${category}`}
                >
                  {category}
                </Link>
              );
            })
            : null}
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
        <span className='article__comments'>Comments: {commentsNumber}</span>
        <Link className='article__ref' to={`/articles/${id}`}>
          Read more...
        </Link>
      </div>
    </article>
  );
}
