import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../App';

const serverRender = async () => {
  const initialMarkup = renderToString(<App />);
  return initialMarkup;
};

module.exports = serverRender;
