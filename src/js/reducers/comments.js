import { v4 } from 'uuid';
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
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: v4(),
          date: new Date(),
          validate: action.userType === userTypes.ADMIN ? true: false,
          articleId: action.articleId,
          userId: action.userId,
          text: action.text
        }
      ];
    case DELETE_COMMENT:
      return state.filter(_ => _.id !== action.id);
    case DELETE_ARTICLE_COMMENTS:
      return state.filter(_ => !action.commentsId.includes(_.id));
    case CHANGE_COMMENT:
      return [
        ...state.filter(_ => _.id !== action.id),
        comment(...state.filter(_ => _.id === action.id), action)
      ];
    case VALIDATE_COMMENT:
      return [
        ...state.filter(_ => _.id !== action.id),
        comment(...state.filter(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default comments;
