import {
  CHANGE_SETTINGS,
  CHANGE_ABOUT_CONTENT
} from '../constants/actionTypes';

export const changeSettings = settings => ({
  type: CHANGE_SETTINGS,
  ...settings
});

export const changeContent = content => ({
  type: CHANGE_ABOUT_CONTENT,
  content
});
