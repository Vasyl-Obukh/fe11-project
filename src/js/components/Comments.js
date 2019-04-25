import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import userTypes from '../constants/userTypes';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.isMount = true;
    this.timer;
    this.state = {
      isSigned:
        this.props.currentUser.userType === userTypes.NON_AUTHORIZED
          ? false
          : true,
      comment: '',
      message: false,
      error: ''
    };
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      isSigned:
        newProps.currentUser.userType == userTypes.NON_AUTHORIZED ? false : true
    });
  }

  componentWillUnmount = () => {
    this.isMount = false;
  }

  onType = e => {
    this.setState({
      comment: e.target.value.trimLeft(),
      error: '',
      message: ''
    });
    this.timer ? clearTimeout(this.timer) : null;
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      articleId,
      addComment,
      currentUser: { id: userId, userType }
    } = this.props;
    let isAdmin = userType === !userTypes.ADMIN;
    try {
      if (!this.state.comment) {
        throw 'You need to fill the comment field';
      }

      addComment({
        text: this.state.comment.trim(),
        articleId,
        userId,
        userType
      });

      this.setState({
        comment: '',
        message: !isAdmin ? true : false
      });

      this.timer = !isAdmin ? setTimeout(
        () => (this.isMount ? this.setState({ message: false }) : null),
        3000
      ) : null;
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <section className='article__comments comments'>
        {this.state.isSigned ? (
          <form className='comments__form' onSubmit={this.onSubmit}>
            <p className='comments__text'>Please, leave your comment here</p>
            <textarea
              className='comments__field'
              value={this.state.comment}
              onChange={this.onType}
              placeholder='Enter your comment...'
            />
            {this.state.error ? (
              <p className='comments__error'>{this.state.error}</p>
            ) : null}
            {this.state.message ? (
              <p>Your comment will be added after validation</p>
            ) : null}
            <button className='comments__submit' type='submit'>
              Submit
            </button>
          </form>
        ) : (
          <h3 className='comments__text'>
            Please, sign in or make a new account
          </h3>
        )}
        <ul className='comments__list'>
          {this.props.comments.length > 0 ? (
            this.props.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          ) : (
            <h2 className='comments__absence'>
              This artilce doesn't have any comments yet
            </h2>
          )}
        </ul>
      </section>
    );
  }
}

Comments.propTypes = {
  addComment: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(PropTypes.object),
  currentUser: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    userId: PropTypes.string
  })
};
