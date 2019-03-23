import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.name;
    this.email;
    this.password;
    this.state = {
      errorMessage: ''
    };
  }

  addAndLogin(user) {
    this.props.addUser(user);
    this.props.logIn(user);
  }

  onSignUp = e => {
    e.preventDefault();

    const { users } = this.props;

    users.filter(user => user.email === this.email.value.trim()).length > 0
      ? this.setState({
          errorMessage: 'Account with this email is already exist'
        })
      : users.filter(user => user.name === this.name.value.trim()).length > 0
      ? this.setState({
          errorMessage: 'This name is taken'
        })
      : this.addAndLogin({
          name: this.name.value.trim(),
          password: this.password.value.trim(),
          email: this.email.value.trim()
        });
  };

  render() {
    return (
      <form className='modal--form' onSubmit={this.onSignUp}>
        <label htmlFor='name'>full name</label>
        <input
          type='text'
          id='name'
          placeholder='Enter your full name'
          autoComplete='off'
          required
          ref={node => {
            this.name = node;
          }}
        />
        <label htmlFor='email'>e-mail</label>
        <input
          type='email'
          id='email'
          placeholder='Enter your email'
          autoComplete='off'
          required
          ref={node => {
            this.email = node;
          }}
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter your password'
          autoComplete='off'
          required
          ref={node => {
            this.password = node;
          }}
        />
        {this.state.errorMessage !== '' ? (
          <p className='error'>{this.state.errorMessage}</p>
        ) : null}
        <button type='submit'>Sign up</button>
      </form>
    );
  }
}
