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
      <>
        <li className='list-item list-item_comments'>
          <div className='list-item__author'>{comment.userName}</div>
          <div className='list-item__text'>{comment.text}</div>
          <div className='list-item__article'>
            <Link
              className='list-item__link'
              to={`/articles/${comment.articleId}`}
            >
              {comment.articleTitle}
            </Link>
          </div>
          <div className='list-item__date'>
            {formatDate(comment.date, true)}
          </div>
          {this.props.comment.validate ? (
            <div
              className='list-item__validation'
              onClick={() => validateComment(false)}
            >
              <span className='list-item__btn'>Unvalidate</span>
            </div>
          ) : (
            <div
              className='list-item__validation'
              onClick={() => validateComment(true)}
            >
              <span className='list-item__btn'>Validate</span>
            </div>
          )}
          <div className='list-item__edit' onClick={this.handleShow}>
            <i className='fas fa-edit' />
          </div>
          <span className='list-item__delete' onClick={deleteComment}>
            &times;
          </span>
        </li>
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <form className='admin-modal' onSubmit={this.onSubmit}>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='comment'>
                  Comment text
                </label>
                <textarea
                  id='comment'
                  className='admin-modal__textarea'
                  value={this.state.text}
                  rows='5'
                  onChange={e =>
                    this.setState({ text: e.target.value.trimLeft() })
                  }
                  placeholder='Enter comment text'
                  autoComplete='off'
                  required
                />
              </div>
              {this.state.error ? <p>This category name is taken</p> : null}
              <button className='submit' type='submit'>Submit</button>
            </form>
          </Modal>
        ) : null}
      </>
    );
  }
}
