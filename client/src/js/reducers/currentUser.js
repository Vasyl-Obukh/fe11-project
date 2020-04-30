import { LOG_IN, LOG_OUT } from '../constants/actionTypes';
import roles from '../constants/roles';

const currentUser = (
  state = { role: roles.NON_AUTHORIZED },
  {type, ...data}
) => {
  switch (type) {
    case LOG_IN:
      return {
        ...data
      };
    case LOG_OUT:
      return {
        role: roles.NON_AUTHORIZED
      };
    default:
      return state;
  }
};

export default currentUser;
