import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import Routes from './Routes';
import createStore from './redux';

const { INITIAL_STATE } = window;

const store = createStore(INITIAL_STATE);
const persistor = persistStore(store);

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);
