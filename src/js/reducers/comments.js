import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  DELETE_ARTICLE_COMMENTS,
  VALIDATE_COMMENT
} from '../constants/actionTypes';
import userTypes from '../constants/userTypes';

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
        validate: action.validate
      };
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  const {type, userType, ...data} = action;
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          validate: userType === userTypes.ADMIN ? true: false,
          ...data
        }
      ];
    case DELETE_COMMENT:
      return state.filter(_ => _.id !== action.id);
    case DELETE_ARTICLE_COMMENTS:
      return state.filter(_ => !action.commentsId.includes(_.id));
    case CHANGE_COMMENT:
      return [
        ...state.filter(_ => _.id !== action.id),
        comment(state.find(_ => _.id === action.id), action)
      ];
    case VALIDATE_COMMENT:
      return [
        ...state.filter(_ => _.id !== action.id),
        comment(state.find(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default comments;
