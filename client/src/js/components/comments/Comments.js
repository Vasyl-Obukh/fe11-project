import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Submit from '../other/Submit';
import userTypes from '../../constants/userTypes';
import InputError from '../../InputError';

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
    const isAdmin = userType === userTypes.ADMIN;

    try {
      if (!this.state.comment) {
        throw new InputError('You need to fill up the comment field');
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
      if (error instanceof InputError) {
        this.setState({ error: error.message });
      }
    }
  };

  render() {
    return (
      <section className='comments'>
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
              <p className='error'>{this.state.error}</p>
            ) : null}
            {this.state.message ? (
              <h3 className='comments__message'>Your comment will be added after validation</h3>
            ) : null}
            <Submit />
          </form>
        ) : (
          <h3 className='comments__text'>
            Please, sign in or make a new account to leave comment
          </h3>
        )}
        <ul className='comments__list'>
          {this.props.comments.length > 0 ? (
            this.props.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          ) : (
            <h2 className='absence'>
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
