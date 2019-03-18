import { combineReducers } from 'redux';
import articles from './articles';
import comments from './comments';
import categories from './categories';
import users from './users';
import sortType from './sortType';
import visibilityFilter from './visibilityFilter';
import currentUser from './currentUser';

const reducers = combineReducers({
  articles,
  comments,
  categories,
  users,
  sortType,
  visibilityFilter,
  currentUser
});

export default reducers;