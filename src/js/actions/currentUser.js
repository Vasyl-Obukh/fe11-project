import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

export const logIn = ({ name, password, email }) => ({
  type: LOG_IN,
  name,
  password,
  email
});

export const logOut = () => ({
  type: LOG_OUT
});
