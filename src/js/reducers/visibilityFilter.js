import visibilityFilters from '../constants/visibilityFilters';
import { SET_SHOW_ALL, SET_SHOW_BY_CATEGORY } from '../constants/actionTypes';

const visibilityFilter = (state = { filterType: visibilityFilters.SHOW_ALL }, action) => {
  switch (action.type) {
  case SET_SHOW_ALL:
    return { 
      filterType: visibilityFilters.SHOW_ALL 
    };
  case SET_SHOW_BY_CATEGORY:
    return {
      filterType: visibilityFilters.SHOW_BY_CATEGORY,
      categories: action.categories
    };
  default:
    return state;
  }
};

export default visibilityFilter;