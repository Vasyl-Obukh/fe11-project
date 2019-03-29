import { LOG_IN, LOG_OUT } from '../constants/actionTypes';
import userTypes from '../constants/userTypes';

const currentUser = (
  state = { userType: userTypes.NON_AUTHORIZED },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        userType: action.userType,
        id: action.id,
        name: action.name,
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
