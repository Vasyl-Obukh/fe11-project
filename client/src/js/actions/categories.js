import { v4 } from 'uuid';
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY,
  SET_CATEGORIES,
} from '../constants/actionTypes';

export const addCategory = name => ({
  type: ADD_CATEGORY,
  id: v4(),
  name
});

export const setCategories = categories => ({
  payload: categories,
  type: SET_CATEGORIES,
});

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  id
});

export const changeCategoryName = ({ id, name }) => ({
  type: CHANGE_CATEGORY,
  id,
  name
});
