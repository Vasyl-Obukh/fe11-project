import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  VALIDATE_COMMENT
} from '../constants/actionTypes';

export const addComment = ({ articleId, userName, text }) => {
  return {
    type: ADD_COMMENT,
    articleId,
    userName,
    text
  };
};

export const changeComment = (id, text) => {
  return {
    type: CHANGE_COMMENT,
    id,
    text
  };
};

export const deleteComment = id => {
  return {
    type: DELETE_COMMENT,
    id
  };
};

export const validateComment = id => {
  return {
    type: VALIDATE_COMMENT,
    id
  };
};