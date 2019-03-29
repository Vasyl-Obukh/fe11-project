import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  CHANGE_ARTICLE,
  CHANGE_ARTICLE_COMMENTS_NUMBER
} from '../constants/actionTypes';

export const addArticle = ({
  title,
  text,
  overview,
  thumbnailUrl,
  categoriesId
}) => ({
  type: ADD_ARTICLE,
  title,
  text,
  overview,
  thumbnailUrl,
  categoriesId
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  id
});

export const changeArticle = ({
  id,
  title,
  text,
  overview,
  thumbnailUrl,
  categoriesId
}) => ({
  type: CHANGE_ARTICLE,
  id,
  title,
  text,
  overview,
  thumbnailUrl,
  categoriesId
});

export const changeCommentsNumber = (id, raise) => ({
  type: CHANGE_ARTICLE_COMMENTS_NUMBER,
  id,
  raise
});
