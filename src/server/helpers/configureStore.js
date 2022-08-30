import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '../../client/redux/index';

export default (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
