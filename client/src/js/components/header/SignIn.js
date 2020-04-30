import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Submit from '../other/Submit';
import InputError from '../../InputError';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  onSignIn = async e => {
    e.preventDefault();

    let email = this.state.email.trim();
    let password = this.state.password.trim();

    try {
      if (email === '' || password === '' ) {
        throw new InputError('You need to fill up all fields');
      }
      // let user = this.props.isUserExists({email, password});
      const user = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }).then(_ => _.json());

      if(user) {
        this.props.logIn(user);
      }
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
      <form className='sign-form' onSubmit={this.onSignIn}>
        <label className='sign-form__label' htmlFor='email'>
          e-mail address
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
          <p className='error'>{this.state.error}</p>
        ) : null}
        <Submit className='sign-form__submit' text='Sign in' />
      </form>
    );
  }
}

SignIn.propTypes = {
  isUserExists: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};
