import { v4 } from 'uuid';
import { ADD_USER } from '../constants/actionTypes';
import userTypes from '../constants/userTypes';
import InputError from '../InputError';

// const user = (state = {}, action) => {
//   switch (action.type) {
//     case CHANGE_USER:
//       return {
//         ...state,
//         name: action.name,
//         email: action.email,
//         password: action.password
//       };
//     default:
//       return state;
//   }
// };

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
          id: v4(),
          userType: userTypes.USER,
          ...data
        }
      ];
    // case DELETE_USER:
    //   return state.filter(_ => _.id !== action.id);
    // case CHANGE_USER:
    //   return [
    //     ...state.filter(_ => _.id !== action.id),
    //     user(...state.find(_ => _.id === action.id), action)
    //   ];
    default:
      return state;
  }
};

export default users;
