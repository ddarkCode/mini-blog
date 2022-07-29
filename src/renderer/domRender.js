import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../App';
import AppState from '../state/appState';

const { initialData } = window;

const store = new AppState(initialData);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App store={store} />);
