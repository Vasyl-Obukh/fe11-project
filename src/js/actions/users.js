import { ADD_USER, DELETE_USER, CHANGE_USER } from '../constants/actionTypes';

export const addUser = ({ name, email, password }) => ({
  type: ADD_USER,
  name,
  email,
  password,
});

export const deleteUser = id => ({
  type: DELETE_USER,
  id
});

export const changeUser = ({ id, name, email, password }) => ({
  type: CHANGE_USER,
  id,
  name,
  email,
  password
});