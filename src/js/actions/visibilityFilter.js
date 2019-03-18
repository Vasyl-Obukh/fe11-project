import visibilityFilters from '../constants/visibilityFilters';
import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';

export const showAll = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter: visibilityFilters.SHOW_ALL
  };
};

export const showPage = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter: visibilityFilters.SHOW_PAGE
  };
};