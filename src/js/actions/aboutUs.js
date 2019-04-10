import { CHANGE_ABOUT_US_CONTENT } from '../constants/actionTypes';

export const changeContent = content => ({
  type: CHANGE_ABOUT_US_CONTENT,
  content
});
