import { LOG_IN, LOG_OUT } from '../constants/actionTypes';
import userTypes from '../constants/userTypes';

const currentUser = ( state = { userType: userTypes.NON_AUTHORIZED }, action ) => {
  switch (action.type) {
  case LOG_IN:
    return {
      userType: action.name === 'admin' ? userTypes.ADMIN : userTypes.AUTHORIZED,
      name: action.name,
      login: action.login,
      password: action.password,
      email: action.email
    };
  case LOG_OUT:
    return {
      userType: userTypes.NON_AUTHORIZED
    };
  default:
    return state;
  }
};

export default currentUser;