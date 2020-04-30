import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utilities';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default function ArticleShort({ article, handleShow, deleteArticle }) {
  const message = 'Do you wanna delete this article?';
  const onDelete = e => (confirm(message) ? deleteArticle(e) : null);

  return (
    <>
      <div className='list-item__title'>
        <Link
          className='list-item__link'
          to={paths.ARTICLE_PAGE.replace(/:\w*/, article._id)}
        >
          {article.title}
        </Link>
      </div>
      <div className='list-item__categories'>
        {article.categoriesName.length ? (
          article.categoriesName.map(({ name, _id}) => (
            <Link
              key={_id}
              className='list-item__link'
              to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, _id)}
            >
              {name}
            </Link>
          ))
        ) : (
          <span>none</span>
        )}
      </div>
      <div className='list-item__comments'>{article.commentsNumber}</div>
      <div className='list-item__date'>{formatDate(article.date)}</div>
      <div className='list-item__edit' onClick={handleShow}>
        <i className='fas fa-edit' />
      </div>
      <span className='list-item__delete' onClick={onDelete}>
        &times;
      </span>
    </>
  );
}

ArticleShort.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoriesName: PropTypes.array.isRequired,
    commentsNumber: PropTypes.number/*.isRequired*/,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired
  }),
  handleShow: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
};
