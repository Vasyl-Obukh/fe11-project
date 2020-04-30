import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class Comments extends Component {
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch('/api/comments')
      .then(comments => comments.json())
      .then(comments => {
        this.props.setComments(comments);
      });
  }

  render() {
    const {
      comments = [],
      deleteComment,
      validateComment,
      changeComment
    } = this.props;

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
        {comments.length ? (
          <ul className='admin-list'>
            {comments.map(comment => (
              <li key={comment._id} className='list-item list-item_comments'>
                <Comment
                  comment={comment}
                  deleteComment={() =>
                    deleteComment(comment.id, comment.articleId, comment.validate)
                  }
                  validateComment={validate =>
                    validateComment(comment.id, comment.articleId, validate)
                  }
                  changeComment={text => changeComment(comment.id, text)}
                  fetchComments={this.fetchComments}
                />
              </li>
            ))}
          </ul>
        ) : (
          <h3 className='absence'>{'There\'s no comments here yet'}</h3>
        )}
      </>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  deleteComment: PropTypes.func.isRequired,
  validateComment: PropTypes.func.isRequired,
  changeComment: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
};
