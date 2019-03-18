import { combineReducers } from 'redux';
import articles from './articles';
import comments from './comments';
import categories from './categories';
import users from './users';
import sortType from './sortType';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  articles,
  comments,
  categories,
  users,
  sortType,
  visibilityFilter
});

export default reducers;