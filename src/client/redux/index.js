import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import blogReducer from './singleBlog';
import blogsReducer from './blogs';
import authReducer from './auth';

export const reducer = {
  auth: authReducer,
  blogs: blogsReducer,
  blog: blogReducer,
};

export default (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
