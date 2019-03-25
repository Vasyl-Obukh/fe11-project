import React, { Component } from 'react';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isSignIn: true
    };
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  showSignIn = value => {
    this.setState({ isSignIn: value });
  };

  render() {
    return (
      <div className='sign'>
        <span
          className='sign--in'
          onClick={() => (this.showSignIn(true), this.handleShow())}
        >
          Sign in
        </span>
        <span
          className='sign--up'
          onClick={() => (this.showSignIn(false), this.handleShow())}
        >
          Sign up
        </span>
        {this.state.showModal ? (
          <Modal onOutsideClick={this.onOutsideClick} handleHide={this.handleHide}>
            <div className='modal--toggle'>
              <span
                onClick={() => this.showSignIn(true)}
                style={
                  this.state.isSignIn ? { backgroundColor: '#777' } : null
                }
              >
                Sign in
              </span>
              <span
                onClick={() => this.showSignIn(false)}
                style={
                  !this.state.isSignIn ? { backgroundColor: '#777' } : null
                }
              >
                Sign up
              </span>
            </div>
            {this.state.isSignIn ? (
              <SignIn users={this.props.users} logIn={this.props.logIn} />
            ) : (
              <SignUp
                users={this.props.users}
                addUser={this.props.addUser}
                logIn={this.props.logIn}
              />
            )}
          </Modal>
        ) : null}
      </div>
    );
  }
}
