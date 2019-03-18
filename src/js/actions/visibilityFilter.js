import { SET_SHOW_ALL, SET_SHOW_BY_CATEGORY } from '../constants/actionTypes';

export const showAll = () => {
  return {
    type: SET_SHOW_ALL,
  };
};

export const showByCategory = (...categoriesId) => {
  return {
    type: SET_SHOW_BY_CATEGORY,
    categoriesId
  };
};