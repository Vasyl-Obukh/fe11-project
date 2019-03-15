import { CHANGE_VALUE } from '../constants/actionTypes';

export const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    value
  };
};
