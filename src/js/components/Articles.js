import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const Articles = ({ articles }) => {
  return (
    <Pagination>
      {articles.map((_) => {
        return (
          <article key={_.id} className='article'>
            <h2 className='article--title'>
              <Link to='/post'>{_.title}</Link>
            </h2>
            <div className='article--cat-n-date'>
              <div className='categories'>
                <span>Category: </span>
                {_.category.map((_, id) => {
                  return (
                    <Link key={id} to='/category'>{_}</Link>
                  );
                })}
              </div>
              <div className='date'>
                <span>{_.date.getDay()}</span>
              </div>
            </div>
            <div className='article--thumbnail'>
              <img src={_.thumbnailUrl} alt='post thumbnail'></img>
            </div>
            <div className='article--overview'>
              <p>{_.overview}</p>
            </div>
            <div className='article--comments-n-link'>
              <span>Comments: {_.commentsNumber}</span>
              <Link to={`/post-{_.id}`}>Read more...</Link>
            </div>
          </article>
        );
      })}
    </Pagination>
  );
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
