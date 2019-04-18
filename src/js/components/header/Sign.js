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
        <i
          className='fas fa-sign-in-alt sign__img sign__in_mobile'
          onClick={() => (this.showSignIn(true), this.handleShow())}
        />
        <span
          className='sign__in'
          onClick={() => (this.showSignIn(true), this.handleShow())}
        >
          Sign in
        </span>
        <span
          className='sign__up'
          onClick={() => (this.showSignIn(false), this.handleShow())}
        >
          Sign up
        </span>
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <div className='sign-modal'>
              <div className='sign-modal__head'>
                <span
                  className={`sign-modal__toggle sign-modal__toggle_left sign-modal__toggle_${
                    this.state.isSignIn ? 'active' : 'default'
                  }`}
                  onClick={() => this.showSignIn(true)}
                >
                  Sign in
                </span>
                <span
                  onClick={() => this.showSignIn(false)}
                  className={`sign-modal__toggle sign-modal__toggle_right sign-modal__toggle_${
                    !this.state.isSignIn ? 'active' : 'default'
                  }`}
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
                  showSignIn={this.showSignIn}
                />
              )}
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
