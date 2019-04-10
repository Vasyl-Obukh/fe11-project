import { combineReducers } from 'redux';
import categories from './categories';
import articles from './articles';
import users from './users';
import currentUser from './currentUser';
import comments from './comments';
import settings from './settings';
import aboutUs from './aboutUs';

const reducers = combineReducers({
  categories,
  articles,
  users,
  currentUser,
  comments,
  settings,
  aboutUs
});

export default reducers;
