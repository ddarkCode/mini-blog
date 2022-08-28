import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { singleBlogReducer, allBlogsReducer } from './blogs/index';
import authReducer from './auth';

export const reducers = combineReducers({
  blog: singleBlogReducer,
  blogs: allBlogsReducer,
  auth: authReducer,
});

export default (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(thunk));
