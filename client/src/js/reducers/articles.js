import {
  ADD_ARTICLE,
  SET_ARTICLES,
  DELETE_ARTICLE,
  CHANGE_ARTICLE,
  CHANGE_COMMENTS_NUMBER
} from '../constants/actionTypes';

const article = (state = {}, { type, ...action }) => {
  switch (type) {
    case CHANGE_ARTICLE:
      return {
        ...state,
        ...action
      };
    case CHANGE_COMMENTS_NUMBER:
      return {
        ...state,
        commentsNumber:
          state.commentsNumber +
          (action.raise ? 1 : state.commentsNumber > 0 ? -1 : 0)
      };
    default:
      return state;
  }
};

const articles = (state = [], action) => {
  const { type, payload, ...data } = action;
  switch (type) {
    case SET_ARTICLES:
      return payload;
    case ADD_ARTICLE:
      return [
        ...state,
        {
          commentsNumber: 0,
          ...data
        }
      ];
    case DELETE_ARTICLE:
      return state.filter(_ => _.id !== action.id);
    case CHANGE_ARTICLE:
      return [
        ...state.filter(_ => _.id !== action.id),
        article(state.find(_ => _.id === action.id), action)
      ];
    case CHANGE_COMMENTS_NUMBER:
      return [
        ...state.filter(_ => _.id !== action.id),
        article(state.find(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default articles;
