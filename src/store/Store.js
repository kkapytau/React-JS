import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from '../reducers/MoviesReducer';
import filterReducer from '../reducers/FilterReducer';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Combine Reducers
const reducers = combineReducers({
  moviesState: moviesReducer,
  filtersState: filterReducer
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */
export default store;
