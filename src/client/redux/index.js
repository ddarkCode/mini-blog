import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import blogsReducer from './blogs/index';
import authReducer from './auth';

export const reducers = combineReducers({
  blogs: blogsReducer,
  auth: authReducer,
});

export default (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(thunk));
