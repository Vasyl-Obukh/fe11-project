import sortTypes from '../constants/sortTypes';
import { SET_SORT_TYPE } from '../constants/actionTypes';

export const dateDown = () => {
  return {
    type: SET_SORT_TYPE,
    sortType: sortTypes.DATE_DOWN
  };
};

export const dateUp = () => {
  return {
    type: SET_SORT_TYPE,
    sortType: sortTypes.DATE_UP
  };
};