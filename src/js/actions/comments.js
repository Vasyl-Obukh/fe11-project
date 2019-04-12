import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  DELETE_ARTICLE_COMMENTS,
  VALIDATE_COMMENT
} from '../constants/actionTypes';

export const addComment = ({ articleId, userId, userType, text }) => ({
  type: ADD_COMMENT,
  articleId,
  userId,
  userType,
  text
});

export const changeComment = (id, text) => ({
  type: CHANGE_COMMENT,
  id,
  text
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const deleteArticleComments = commentsId => ({
  type: DELETE_ARTICLE_COMMENTS,
  commentsId
});

export const validateComment = (id, validate) => ({
  type: VALIDATE_COMMENT,
  id,
  validate
});
