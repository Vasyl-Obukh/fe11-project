import React from 'react';

const SignUp = ({ users, addUser, logIn, history }) => {
  let name;
  let login;
  let password;
  let email;
  let message;
  const onSignUp = e => {
    e.preventDefault();

    let err1 = users.filter(_ => _.email === email.value );
    if (err1.length > 0) {
      console.log('Account with this e-mail is already exist');
      return;
    }
    let err2 = users.filter(_ => _.login === login.value);
    if(err2.length > 0) {
      console.log('This login is taken');
      return;
    }
    let err3 = users.filter(_ => _.name === name.value);
    if(err3.length > 0) {
      console.log('This name is taken');
      return;
    }
    addUser({name: name.value, login: login.value, password: password.value, email: email.value});
    logIn({name: name.value, login: login.value, password: password.value, email: email.value});
    history.push('/');
    //console.log('this can not to diisplay');
  };
  return (
    <form onSubmit={onSignUp}>
      <input type='text' placeholder='name' required ref={node => {name = node;}} />
      <input type='text' placeholder='login' required ref={node => {login = node;}} />
      <input type='password' placeholder='password' required ref={node => {password = node;}} />
      <input type='email' placeholder='e-mail' required ref={node => {email = node;}} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignUp;