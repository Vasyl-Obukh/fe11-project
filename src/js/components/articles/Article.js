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
      <h2 className='article--title'>
        <Link to={`/articles/${id}`}>{title}</Link>
      </h2>

      <div className='article--cat-n-date'>
        <div className='categories'>
          <span>Categories: </span>
          {categoriesName.length
            ? categoriesName.map((category, id) => {
              return (
                <Link key={id} to={`/categories/${category}`}>
                  {category}
                </Link>
              );
            })
            : null}
        </div>

        <div className='date'>
          <span>{formatDate(date)}</span>
        </div>
      </div>

      <div className='article--thumbnail'>
        <img src={thumbnailUrl} alt='post thumbnail' />
      </div>

      <div className='article--overview'>
        <p>{overview}</p>
      </div>

      <div className='article--comments-n-link'>
        <span>Comments: {commentsNumber}</span>
        <Link to={`/articles/${id}`}>Read more...</Link>
      </div>
    </article>
  );
}
