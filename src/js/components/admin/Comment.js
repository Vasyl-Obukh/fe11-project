import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import { formatDate } from '../../utilities';
import Submit from '../other/Submit';
import paths from '../../constants/paths';
import InputError from '../../InputError';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoModal: false,
      text: this.props.comment.text,
      error: ''
    };
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    const text = this.state.text.trim();

    try {
      if (!text) {
        throw new InputError('You need to fill up all fields');
      }
      this.props.changeComment(text);
      this.handleHide();
    } catch (error) {
      if (error instanceof InputError) {
        this.setState({ error: error.message });
      } else {
        console.log(error);
      }
    }
  };

  render() {
    const { comment, deleteComment, validateComment } = this.props;
    return (
      <>
        <div className='list-item__author'>{comment.userName}</div>
        <div className='list-item__text'>{comment.text}</div>
        <div className='list-item__article'>
          <Link
            className='list-item__link'
            to={paths.ARTICLE_PAGE.replace(/:\w*$/, comment.articleId)}
          >
            {comment.articleTitle}
          </Link>
        </div>
        <div className='list-item__date'>{formatDate(comment.date)}</div>
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
                    this.setState({
                      text: e.target.value.trimLeft(),
                      error: ''
                    })
                  }
                  placeholder='Enter comment text...'
                  autoComplete='off'
                />
              </div>
              {this.state.error ? <p className='error'>{this.state.error}</p> : null}
              <Submit className='admin-modal__btn' />
            </form>
          </Modal>
        ) : null}
      </>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    articleId: PropTypes.string.isRequired,
    articleTitle: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    validate: PropTypes.bool.isRequired
  }).isRequired,
  changeComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  validateComment: PropTypes.func.isRequired
};
