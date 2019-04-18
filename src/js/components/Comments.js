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
    this.setState({comment: ''})
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
                onChange={e =>
                  this.setState({ comment: e.target.value.trimLeft() })
                }
                placeholder='Enter your comment...'
                rows='5'
                required
              />
              <button className='comments__submit' type='submit'>Submit</button>
            </form>
        ) : (
          <div>
            <h3 className='comments__text'>Please, sign in or make a new account</h3>
          </div>
        )}
        <ul className='comments__list'>
          {this.props.comments.length > 0 ? this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          )) : <h2 className='comments__absence'>This artilce doesn't have any comments yet</h2>}
        </ul>
      </section>
    );
  }
}
