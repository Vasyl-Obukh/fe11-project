import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY_NAME
} from '../constants/actionTypes';

export const addCategory = name => ({
  type: ADD_CATEGORY,
  name
});

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  id
});

export const changeCategoryName = ({ id, name }) => ({
  type: CHANGE_CATEGORY_NAME,
  id,
  name
});
