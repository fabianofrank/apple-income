import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import data from './data/data';

const reducer = combineReducers({
  data,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
