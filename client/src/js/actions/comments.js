import { v4 } from 'uuid';
import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  DELETE_ARTICLE_COMMENTS,
  VALIDATE_COMMENT,
  SET_COMMENTS
} from '../constants/actionTypes';

export const addComment = ({ articleId, userId, role, text }) => ({
  type: ADD_COMMENT,
  id: v4(),
  date: new Date(),
  role,
  articleId,
  userId,
  text
});

export const setComments = comments => ({
  payload: comments,
  type: SET_COMMENTS,
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
