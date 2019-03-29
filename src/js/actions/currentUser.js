import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

export const logIn = ({ userType, id, name, password, email }) => ({
  type: LOG_IN,
  userType,
  id,
  name,
  password,
  email
});

export const logOut = () => ({
  type: LOG_OUT
});
