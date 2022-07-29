import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import deb from 'debug';

import App from '../App';
import AppState from '../state/appState';
import config from '../../config';

const debug = deb('app:serverRender');

const serverRender = async () => {
  let blogs;
  try {
    const { data } = await axios.get(
      `http://${config.host}:${config.port}/api/blogs`
    );
    blogs = data;
  } catch (err) {
    debug(err);
  }

  const rawData = {
    blogs: blogs,
    users: null,
  };
  const store = new AppState(rawData);

  const initialMarkup = renderToString(<App store={store} />);
  return {
    initialMarkup,
    initialData: rawData,
  };
};

export default serverRender;
