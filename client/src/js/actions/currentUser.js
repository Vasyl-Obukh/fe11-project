import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

export const logIn = ({ role, _id, name, password, email }) => ({
  type: LOG_IN,
  role,
  _id,
  name,
  password,
  email
});

export const logOut = () => ({
  type: LOG_OUT
});
