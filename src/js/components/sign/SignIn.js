import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login;
    this.password;
    this.state = {
      error: false
    }
  }

  onSignIn = (e) => {
    e.preventDefault();
    const { users, logIn } = this.props;
  
    let user = users.filter(_ => _.login === this.login.value || _.email === this.login.value);
    if (user.length === 1) {
      this.props.logIn(...user);
      this.props.history.push('/');
    }
  };
  
  render() {
    return (
      <form onSubmit={this.onSignIn}>
        <input type='text' placeholder='login or e-mail' required ref={node => { this.login = node; }} />
        <input type='password' placeholder='password' required ref={node => { this.password = node; }} />
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

export default SignIn;