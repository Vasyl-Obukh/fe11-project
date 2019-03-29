import React, { Component } from 'react';
import Comment from './Comment';
import userTypes from '../constants/userTypes';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigned:
        this.props.currentUser.userType === userTypes.NON_AUTHORIZED
          ? false
          : true,
      comment: ''
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isSigned:
        newProps.currentUser.userType == userTypes.NON_AUTHORIZED ? false : true
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addComment({
      articleId: this.props.articleId,
      userId: this.props.currentUser.id,
      userType: this.props.currentUser.userType,
      text: this.state.comment.trim()
    });
  };

  render() {
    return (
      <section className='article--comments'>
        {this.state.isSigned ? (
          <div className='comment-form'>
            <form onSubmit={this.onSubmit}>
              <p>Please, leave your comment here</p>
              <textarea
                value={this.state.comment}
                onChange={e =>
                  this.setState({ comment: e.target.value.trimLeft() })
                }
                placeholder='Enter your comment'
                rows='5'
                required
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>Please, sign in or make a new account</h3>
          </div>
        )}
        <div className='comments'>
          {this.props.comments.length > 0 ? this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          )) : <h2>This artilce doesn't have any comments yet</h2>}
        </div>
      </section>
    );
  }
}
