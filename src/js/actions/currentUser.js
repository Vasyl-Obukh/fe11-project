import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

export const logIn = ({ userType, name, password, email }) => ({
  type: LOG_IN,
  userType,
  name,
  password,
  email
});

export const logOut = () => ({
  type: LOG_OUT
});
