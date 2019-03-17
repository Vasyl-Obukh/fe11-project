import { combineReducers } from 'redux';
import articles from './articles';
import comments from './comments';
import categories from './categories';
import users from './users';

const reducers = combineReducers({
  articles,
  comments,
  categories,
  users
});

export default reducers;