import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import stateData from './initialState';

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
  localStorage['fe11-app'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    reducers,
    localStorage['fe11-app']
      ? JSON.parse(localStorage['fe11-app'])
      : initialState
  );

export default storeFactory;
