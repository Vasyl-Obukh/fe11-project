import { ADD_USER } from '../constants/actionTypes';

export const addUser = ({ name, login, password, email }) => {
  return {
    type: ADD_USER,
    name,
    login,
    password,
    email
  };
};