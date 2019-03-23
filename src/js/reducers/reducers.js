import { combineReducers } from 'redux';
import categories from './categories';
import articles from './articles';
import users from './users';
import currentUser from './currentUser';
import comments from './comments';
import sortType from './sortType';

const reducers = combineReducers({
  categories,
  articles,
  users,
  currentUser,
  comments,
  sortType
});

export default reducers;