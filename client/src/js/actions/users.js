import { v4 } from 'uuid';
import { ADD_USER } from '../constants/actionTypes';

export const addUser = ({ name, email, password }) => ({
  type: ADD_USER,
  id: v4(),
  name,
  email,
  password,
});
