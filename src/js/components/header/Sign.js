import React, { Component } from 'react';
import Modal from '../Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModale: false,
      isSignIn: true
    };
  }

  handleShow = () => {
    this.setState({ showModale: true });
  };

  showSignIn = value => {
    this.setState({ isSignIn: value });
  };

  handleHide = () => {
    this.setState({ showModale: false });
  };

  onOutsideClick = e => {
    e.target.getAttribute('class') === 'modal-wrapper'
      ? this.handleHide()
      : null;
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
        {this.state.showModale ? (
          <Modal>
            <div className='modal-wrapper' onClick={this.onOutsideClick}>
              <div className='modal'>
                <button className='modal--close' onClick={this.handleHide}>
                  &times;
                </button>
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
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
