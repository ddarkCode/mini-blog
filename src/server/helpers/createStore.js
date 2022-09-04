import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducers, persistedReducer } from '../../client/redux/index';

export default () => createStore(reducers, {}, applyMiddleware(thunk, logger));
