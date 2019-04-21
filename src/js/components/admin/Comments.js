import React from 'react';
import Comment from './Comment';

export default function Comments({
  comments,
  deleteComment,
  validateComment,
  changeComment
}) {
  return (
    <>
      <ul className='list-head list-head_comments'>
        <li className='list-head__item list-head__item_author'>Author</li>
        <li className='list-head__item'>Comment</li>
        <li className='list-head__item list-head__item_article'>Article</li>
        <li className='list-head__item list-head__item_date'>Date</li>
        <li className='list-head__item'>Validation</li>
        <li className='list-head__item'>Edit</li>
      </ul>
      <ul className='admin-list'>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={() =>
              deleteComment(comment.id, comment.articleId, comment.validate)
            }
            validateComment={validate =>
              validateComment(comment.id, comment.articleId, validate)
            }
            changeComment={text => changeComment(comment.id, text)}
          />
        ))}
      </ul>
    </>
  );
}
