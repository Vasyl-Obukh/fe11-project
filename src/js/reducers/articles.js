import { v4 } from 'uuid';
import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  CHANGE_ARTICLE,
  CHANGE_ARTICLE_COMMENTS_NUMBER
} from '../constants/actionTypes';

const article = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_ARTICLE:
      return {
        ...state,
        title: action.title,
        text: action.text,
        overview: action.overview,
        thumbnailUrl: action.thumbnailUrl,
        category: action.category
      };
    case CHANGE_ARTICLE_COMMENTS_NUMBER:
      return {
        ...state,
        commentsNumber: state.commentsNumber + action.commentsNumberChange
      };
    default:
      return state;
  }
};

const articles = (state = [], action) => {
  //console.log(action.type);
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        {
          id: v4(),
          date: new Date(),
          commentsNumber: 0,
          title: action.title,
          text: action.text,
          overview: action.overview,
          thumbnailUrl: action.thumbnailUrl,
          category: action.category
        }
      ];
    case DELETE_ARTICLE:
      return state.filter(_ => _.id !== action.id);
    case CHANGE_ARTICLE:
      return [
        ...state.filter(_ => _.id !== action.id),
        article(...state.filter(_ => _.id === action.id), action)
      ];
    case CHANGE_ARTICLE_COMMENTS_NUMBER:
      return [
        ...state.filter(_ => _.id !== action.id),
        article(...state.filter(_ => _.id === action.id), action)
      ];
    default:
      return state;
  }
};

export default articles;
