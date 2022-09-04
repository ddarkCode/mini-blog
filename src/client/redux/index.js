import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { singleBlogReducer, allBlogsReducer } from './blogs/index';
import authReducer from './auth';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'], // which reducer want to store
};
export const reducers = combineReducers({
  blog: singleBlogReducer,
  blogs: allBlogsReducer,
  auth: authReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);

export default (initialState = {}) =>
  createStore(persistedReducer, initialState, applyMiddleware(thunk, logger));
