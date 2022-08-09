import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>
);
