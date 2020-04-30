import { ADD_USER } from '../constants/actionTypes';
import InputError from '../InputError';
import roles from '../constants/roles';

const users = (state = [], {type, ...data}) => {
  switch (type) {
    case ADD_USER:
      if (state.find(_ => _.email === data.email)) {
        throw new InputError('Account with this email is already exists');
      }
      if(state.find(_ => _.name === data.name)) {
        throw new InputError('This name is taken');
      }
      return [
        ...state,
        {
          role: roles.USER,
          ...data
        }
      ];
    default:
      return state;
  }
};

export default users;
