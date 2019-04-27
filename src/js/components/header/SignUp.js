import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputError from '../../InputError';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  }

  addAndSwitchToLogin = user => {
    this.props.addUser(user);
    this.props.showSignIn(true);
  };

  onSignUp = e => {
    e.preventDefault();
    let name = this.state.name.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    try {
      if (name === '' || email === '' || password === '') {
        throw new InputError('You need to fill up all fields');
      }
      if (name.length < 2) {
        throw new InputError('Name has to contain , at least, 2 symbols');
      }
      if (password.length < 7) {
        throw 'Password has to contain , at least, 7 symbols';
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        throw new InputError('Email is invalid');
      }
      this.addAndSwitchToLogin({ name, email, password });
    } catch (error) {
      if(error instanceof InputError) {
        this.setState({ error: error.message });
      } else {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <form className='sign-form' onSubmit={this.onSignUp}>
        <label className='sign-form__label' htmlFor='name'>
          Name
        </label>
        <input
          className='sign-form__item'
          type='text'
          id='name'
          placeholder='Enter your name...'
          autoComplete='off'
          maxLength='20'
          value={this.state.name}
          onChange={e =>
            this.setState({ name: e.target.value.trimLeft(), error: '' })
          }
        />
        <label className='sign-form__label' htmlFor='email'>
          e-mail
        </label>
        <input
          className='sign-form__item'
          type='text'
          id='email'
          placeholder='Enter your email...'
          autoComplete='off'
          value={this.state.email}
          onChange={e =>
            this.setState({ email: e.target.value.trimLeft(), error: '' })
          }
        />
        <label className='sign-form__label' htmlFor='password'>
          password
        </label>
        <input
          className='sign-form__item'
          type='password'
          id='password'
          placeholder='Enter your password...'
          autoComplete='off'
          value={this.state.password}
          onChange={e =>
            this.setState({ password: e.target.value.trimLeft(), error: '' })
          }
        />
        {this.state.error ? (
          <p className='sign-form__error error'>{this.state.error}</p>
        ) : null}
        <button className='sign-form__submit' type='submit'>
          Sign up
        </button>
      </form>
    );
  }
}

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  showSignIn: PropTypes.func.isRequired
};
