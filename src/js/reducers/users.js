import { ADD_USER } from '../constants/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
  case ADD_USER:
    return [
      ...state,
      {
        name: action.name,
        login: action.login,
        password: action.password,
        email: action.email
      }
    ];
  default:
    return state;
  }
};

export default users;