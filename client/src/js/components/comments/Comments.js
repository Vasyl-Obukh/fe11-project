import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Submit from '../other/Submit';
import roles from '../../constants/roles';
import InputError from '../../InputError';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.isMount = true;
    this.timer;
    this.state = {
      isSigned: this.props.currentUser.role !== roles.NON_AUTHORIZED,
      comment: '',
      message: false,
      error: ''
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch('/api/comments')
      .then(comments => comments.json())
      .then(comments => {
        this.props.setComments(comments);
      });
  };

  componentWillReceiveProps = (newProps) => {
    this.setState({
      isSigned: newProps.currentUser.role !== roles.NON_AUTHORIZED
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

  onSubmit = async e => {
    e.preventDefault();
    const {
      articleId,
      //addComment,
      currentUser: { _id: userId, role }
    } = this.props;
    const isAdmin = role === roles.ADMIN;

    try {
      if (!this.state.comment) {
        throw new InputError('You need to fill up the comment field');
      }

      // addComment({
      //   text: this.state.comment.trim(),
      //   articleId,
      //   userId,
      //   role
      // });
      await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.state.comment,
          userId,
          articleId,
          validated: isAdmin
        })
      });

      this.setState({
        comment: '',
        message: !isAdmin ? true : false
      });
      this.fetchComments();

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
              <Comment key={comment._id} comment={comment} />
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
  comments: PropTypes.arrayOf(PropTypes.object),
  currentUser: PropTypes.shape({
    role: PropTypes.string.isRequired,
    _id: PropTypes.string
  }),
  setComments: PropTypes.func.isRequired,
};
