import sortTypes from '../constants/sortTypes';
import { SET_SORT_TYPE } from '../constants/actionTypes';

const sortType = (state = sortTypes.DATE_DOWN, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};

export default sortType;
