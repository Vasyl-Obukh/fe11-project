import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
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

export const validateComment = id => ({
  type: VALIDATE_COMMENT,
  id
});
