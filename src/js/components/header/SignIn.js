import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.email;
    this.password;
    this.state = {
      error: false
    };
  }

  onSignIn = e => {
    e.preventDefault();
    const { users, logIn } = this.props;

    let user = users.filter(
      user =>
        user.email === this.email.value.trim() &&
        user.password === this.password.value.trim()
    );
    user.length === 1
      ? this.props.logIn(...user)
      : this.setState({ error: true });
  };

  render() {
    return (
      <form className='modal--form' onSubmit={this.onSignIn}>
        <label htmlFor='email'>e-mail address</label>
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
        {this.state.error ? (
          <p className='error'>Email or password is incorrect</p>
        ) : null}
        <button type='submit'>Sign in</button>
      </form>
    );
  }
}

export default SignIn;
