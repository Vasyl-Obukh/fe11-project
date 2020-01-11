import { LOG_IN, LOG_OUT } from '../constants/actionTypes';
import userTypes from '../constants/userTypes';

const currentUser = (
  state = { userType: userTypes.NON_AUTHORIZED },
  {type, ...data}
) => {
  switch (type) {
    case LOG_IN:
      return {
        ...data
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
