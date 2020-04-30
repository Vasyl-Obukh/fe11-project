import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import stateData from './initialState';
import {composeWithDevTools, ComposeWithDevTools} from 'redux-devtools-extension';

const logger = store => next => action => {
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage['blog-app'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  composeWithDevTools(applyMiddleware(logger, saver))(createStore)(
    reducers,
    localStorage['blog-app']
      ? JSON.parse(localStorage['blog-app'])
      : initialState
  );

export default storeFactory;
