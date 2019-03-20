import { v4 } from 'uuid';
import { 
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  VALIDATE_COMMENT 
} from '../constants/actionTypes';

const comment = (state = {}, action) => {
  switch (action.type) {
  case CHANGE_COMMENT:
    return {
      ...state,
      text: action.text
    };
  case VALIDATE_COMMENT:
    return {
      ...state,
      validate: true
    };
  default:
    return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
  case ADD_COMMENT:
    return [
      ...state,
      {
        id: v4(),
        date: new Date(),
        validate: action.userName === 'Admin' ? true : false,
        articleId: action.articleId,
        userName: action.userName,
        text: action.text
      }
    ];
  case CHANGE_COMMENT:
    return [
      ...state.filter(_ => _.id !== action.id),
      comment(...state.filter(_ => _.id === action.id), action)
    ];
  case VALIDATE_COMMENT:
    return [
      ...state.filter(_ => _.id !== action.id),
      comment(...state.filter(_ => _.id === action.id))
    ];
  case DELETE_COMMENT:
    return state.filter(_ => _.id !== action.id);
  default:
    return state;
  }
};

export default comments;