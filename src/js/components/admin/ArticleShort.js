import React from 'react';
import { formatDate } from '../../utilities';
import { Link } from 'react-router-dom';

export default function ArticleShort({
  article,
  handleShow,
  deleteArticle,
  categories
}) {
  const message = 'Do you wanna delete this article?';
  const onDelete = e => (confirm(message) ? deleteArticle(e) : null);
  return (
    <li className='list-item list-item_articles'>
      <div className='list-item__title'>
        <Link className='list-item__link' to={`/articles/${article.id}`}>
          {article.title}
        </Link>
      </div>
      <div className='list-item__categories'>
        {categories.map((_, id) => (
          <Link key={id} className='list-item__link' to={`/categories/${_}`}>
            {_}
          </Link>
        ))}
      </div>
      <div className='list-item__comments'>{article.commentsNumber}</div>
      <div className='list-item__date'>{formatDate(article.date)}</div>
      <div className='list-item__edit' onClick={handleShow}>
        <i className='fas fa-edit' />
      </div>
      <span className='list-item__delete' onClick={onDelete}>
        &times;
      </span>
    </li>
  );
}
