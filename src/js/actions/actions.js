import { CHANGE_VALUE,
  ADD_ARTICLE,
  CHANGE_ARTICLE } from '../constants/actionTypes';

export const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    value
  };
};

export const addArticle = ({title, text, overview, thumbnailUrl, category}) => {
  return {
    type: ADD_ARTICLE,
    title,
    text,
    overview,
    thumbnailUrl,
    category
  };
};

export const changeArticle = ({id, title, text, overview, thumbnailUrl, category}) => {
  return {
    type: CHANGE_ARTICLE,
    id,
    title,
    text,
    overview,
    thumbnailUrl,
    category
  };
};