import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Routes from './Routes';
import configureStoreKit from './redux';

const { INITIAL_STATE } = window;

const store = configureStoreKit(INITIAL_STATE);

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);
