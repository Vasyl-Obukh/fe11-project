import { ADD_COMMENT,
  GET_COMMENTS,
  GET_POST_COMMENTS,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  VALIDATE_COMMENT } from '../constants/actionTypes';

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
        id: '',
        date: '',
        validate: false,
        articleId: action.articleId,
        userName: action.userName,
        text: action.text
      }
    ];
  case CHANGE_COMMENT:
    return [
      ...state.filter(_ => _.id !== action.id),
      comment()
    ];
  case VALIDATE_COMMENT:
    return [
      ...state.filter(_ => _.id !== action.id),
      comment()
    ];
  case DELETE_COMMENT:
    return state.filter(_ => _.id !== action.id);
  case GET_POST_COMMENTS:
    return state.filter(_ => _.articleId === action.articleId && _.validate === true);
  case GET_COMMENTS:
  default:
    return state;
  }
};

export default comments;