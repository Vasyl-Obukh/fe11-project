import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignIn from '../sign/SignIn';
import SignInContainer from '../../containers/SignInContainer';
import SignUpContainer from '../../containers/SignUpContainer';

/* const SignUp = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='text' placeholder='name'  />
      <input type='text' placeholder='login'  />
      <input type='text' placeholder='password'  />
      <input type='text' placeholder='e-mail'  />
      <button type='submit'>Submit</button>
    </form>
  );
}; */

/* const SignIn = props => {
  let login;
  let password;
  const onSignIn = (e, login, password) => {
    e.preventDefault();
    if (login.value === 'admin' && password.value === '7123') {
      console.log('sign in');
      props.history.push('/admin');
    } else {
      console.log('you\'re not an admin');
    }
  };
  return (
    <form onSubmit={(e) => onSignIn(e, login, password)}>
      <input type='text' placeholder='login or e-mail' required ref={node => {login = node;}} />
      <input type='password' placeholder='password' required ref={node => { password = node; }} />
      <button type='submit'>Submit</button>
    </form>
  );
}; */

const SignPage = () => {
  return (
    <div>
      <div>
        <NavLink to='/sign/in'>Sign in</NavLink>
        <NavLink to='/sign/up'>Sign up</NavLink>
      </div>
      <Route path='/sign/in' component={SignInContainer} />
      <Route path='/sign/up' component={SignUpContainer} />
    </div>
  );
};

export default SignPage;