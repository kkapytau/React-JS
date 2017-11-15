import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from '../reducers/MoviesReducer';
import filterReducer from '../reducers/FilterReducer';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window === 'undefined') ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// Combine Reducers
const reducers = combineReducers({
  moviesState: moviesReducer,
  filtersState: filterReducer
});
/* eslint-enable */
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default function (initialState = {}) {
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
}

