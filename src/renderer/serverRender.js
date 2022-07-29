import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import deb from 'debug';
import { StaticRouter } from 'react-router-dom/server';

import App from '../App';
import AppState from '../state/appState';
import config from '../../config';

const debug = deb('app:serverRender');

const serverRender = async (req) => {
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

  {
    /* <StaticRouter location={req.path} context={context}>
  <div>{renderRoutes(Routes)}</div>
</StaticRouter>; */
  }

  //  <StaticRouter location={req.url}>
  //    <App />
  // </StaticRouter>;
  // <App store={store} />;

  const initialMarkup = renderToString(
    <StaticRouter location={req.url}>
      <App store={store} />
    </StaticRouter>
  );
  return {
    initialMarkup,
    initialData: rawData,
  };
};

export default serverRender;
