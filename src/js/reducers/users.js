import { v4 } from 'uuid';
import { ADD_USER, DELETE_USER, CHANGE_USER } from '../constants/actionTypes';
import userTypes from '../constants/userTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: v4(),
          userType: userTypes.USER,
          name: action.name,
          password: action.password,
          email: action.email
        }
      ];
    case DELETE_USER:
      return state.filter(_ => _.id !== action.id);
    case CHANGE_USER:
      return [
        ...state.filter(_ => _.id !== action.id),
        user(...state.filter(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default users;
