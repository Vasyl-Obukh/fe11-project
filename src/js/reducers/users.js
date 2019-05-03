import { ADD_USER } from '../constants/actionTypes';
import InputError from '../InputError';
import userTypes from '../constants/userTypes';

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
          userType: userTypes.USER,
          ...data
        }
      ];
    default:
      return state;
  }
};

export default users;
