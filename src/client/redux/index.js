import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import blogsReducer from './blogs/index';

export const reducers = combineReducers({
  blogs: blogsReducer,
});

export default (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(thunk));
