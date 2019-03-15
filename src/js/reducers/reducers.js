import { combineReducers } from 'redux';
import { CHANGE_VALUE } from '../constants/actionTypes';

const value = (state = {}, action) => {
  switch (action.type) {
  case CHANGE_VALUE:
    return {
      ...state,
      ...action.value
    };
  default:
    return state;
  }
};

const reducers = combineReducers({
  value
});

export default reducers;