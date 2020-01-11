import { combineReducers } from 'redux';
import settings from './settings';
import articles from './articles';
import categories from './categories';
import currentUser from './currentUser';
import comments from './comments';
import users from './users';
import aboutUs from './aboutUs';

const reducers = combineReducers({
  settings,
  articles,
  categories,
  currentUser,
  comments,
  users,
  aboutUs
});

export default reducers;
