import { CHANGE_SETTINGS } from '../constants/actionTypes';

export const changeSettings = settings => ({
  type: CHANGE_SETTINGS,
  ...settings
});
