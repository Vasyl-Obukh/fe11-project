import { createStore,
  applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
import stateData from './initialState';

const logger = store => next => action => {
  //let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  /* let result =  */next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage['test-store'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory  = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    reducers,
    initialState
    /* (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      stateData */
  );

//const store = createStore(reducers, stateData, applyMiddleware(logger, saver));

export default storeFactory;