import { 
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  CHANGE_CATEGORY_NAME
} from '../constants/actionTypes';

const category = (state = {}, action) => {
  switch (action.type) {
  case CHANGE_CATEGORY_NAME:
    return {
      ...state,
      name: action.name
    };
  default:
    return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
  case ADD_CATEGORY:
    return [
      ...state,
      {
        id: '',
        name: action.name
      }
    ];
  case DELETE_CATEGORY:
    return state.filter(_ => _.id !== action.id);
  case CHANGE_CATEGORY_NAME:
    return [
      state.filter(_ => _.id !== action.id),
      category(state.filter(_ => _.id === action.id), action)
    ];
  case GET_CATEGORIES:
  default:
    return state;
  }
};

export default categories;