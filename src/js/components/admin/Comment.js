import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import formatDate from '../../formatDate';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoModal: false,
      text: this.props.comment.text
    };
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.changeComment(this.state.text.trim());
    this.handleHide();
  };

  render() {
    const { comment, deleteComment, validateComment } = this.props;
    return (
      <div className='admin-comment'>
        <div className='comment-author'>
          <p>{comment.userName}</p>
        </div>
        <div className='comment-text'>
          <p>{comment.text}</p>
        </div>
        <div className='comment-article-title'>
          <Link to={`/articles/${comment.articleId}`}>{comment.articleTitle}</Link>
        </div>
        <div className='comment-date'>
          <p>{formatDate(comment.date, true)}</p>
        </div>
        <div className='edit'>
          {this.props.comment.validate ? (
            <span
              onClick={() =>
                validateComment(false)
              }
            >
              Unvalidate
            </span>
          ) : (
            <span
              onClick={() =>
                validateComment(true)
              }
            >
              Validate
            </span>
          )}
        </div>
        <div className='edit' onClick={this.handleShow}>
          Edit
        </div>
        <button
          className='article-delete'
          onClick={deleteComment}
        >
          &times;
        </button>
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <form className='modal--form' onSubmit={this.onSubmit}>
              <label htmlFor='comment'>Comment text</label>
              <textarea
                id='comment'
                value={this.state.text}
                rows='5'
                onChange={e =>
                  this.setState({ text: e.target.value.trimLeft() })
                }
                placeholder='Enter comment text'
                autoComplete='off'
                required
              />
              {this.state.error ? <p>This category name is taken</p> : null}
              <button type='submit'>Submit</button>
            </form>
          </Modal>
        ) : null}
      </div>
    );
  }
}
