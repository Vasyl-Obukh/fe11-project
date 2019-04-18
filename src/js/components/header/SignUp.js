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

  addAndSwitchToLogin = user => {
    this.props.addUser(user);
    this.props.showSignIn(true);
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
      : this.addAndSwitchToLogin({
          name: this.name.value.trim(),
          password: this.password.value.trim(),
          email: this.email.value.trim()
        });
  };

  render() {
    return (
      <form className='sign-form' onSubmit={this.onSignUp}>
        <label className='sign-form__label' htmlFor='name'>
          full name
        </label>
        <input
          className='sign-form__item'
          type='text'
          id='name'
          placeholder='Enter your full name'
          autoComplete='off'
          required
          ref={node => {
            this.name = node;
          }}
        />
        <label className='sign-form__label' htmlFor='email'>
          e-mail
        </label>
        <input
          className='sign-form__item'
          type='email'
          id='email'
          placeholder='Enter your email'
          autoComplete='off'
          required
          ref={node => {
            this.email = node;
          }}
        />
        <label className='sign-form__label' htmlFor='password'>
          password
        </label>
        <input
          className='sign-form__item'
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
          <p className='sign-form__error error'>{this.state.errorMessage}</p>
        ) : null}
        <button className='sign-form__submit' type='submit'>Sign up</button>
      </form>
    );
  }
}
