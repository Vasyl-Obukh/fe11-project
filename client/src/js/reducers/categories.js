import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY,
  SET_CATEGORIES,
} from '../constants/actionTypes';
import InputError from '../InputError';

const category = (state = {}, { type, name }) => {
  switch (type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        name
      };
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      if (state.find(_ => _.name === action.name)) {
        throw new InputError('This category name is taken');
      }
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    case DELETE_CATEGORY:
      return state.filter(_ => _.id !== action.id);
    case CHANGE_CATEGORY:
      if (state.find(_ => _.name === action.name)) {
        throw new InputError('This category name is taken');
      }
      return [
        ...state.filter(_ => _.id !== action.id),
        category(state.find(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default categories;
