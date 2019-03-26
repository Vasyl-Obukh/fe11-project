import React from 'react';
import formatDate from '../../formatDate';

export default function ArticleShort({article, handleShow, deleteArticle}) {
  return (
    <div className='admin-article-container'>
      <div className='admin-article--title'>
        {article.title}
      </div>
      <div className='admin-article--categories'>
        {article.category.join(', ')}
      </div>
      <div className='admin-article--comments'>
        {article.commentsNumber}
      </div>
      <div className='admin-article--date'>
        Published{formatDate(article.date)}
      </div>
      <div className='edit' onClick={handleShow}>
        Edit
      </div>
      <button className='article-delete' onClick={deleteArticle}>
        &times;
      </button>
    </div>
  );
}
