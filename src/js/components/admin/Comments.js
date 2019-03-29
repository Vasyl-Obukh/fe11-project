import React from 'react';
import Comment from './Comment';

export default function Comments({
  comments,
  deleteComment,
  validateComment,
  changeComment
}) {
  return (
    <div className='admin-comments'>
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
    </div>
  );
}
