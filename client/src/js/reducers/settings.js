import { CHANGE_SETTINGS } from '../constants/actionTypes';

const settings = (state = {}, { type, ...settings }) => {
  switch (type) {
    case CHANGE_SETTINGS:
      return { ...state, ...settings };
    default:
      return state;
  }
};

export default settings;
