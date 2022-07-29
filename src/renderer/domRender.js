import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import AppState from '../state/appState';

const { initialData } = window;

const store = new AppState(initialData);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App store={store} />
  </Router>
);
