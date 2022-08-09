import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from '../../client/Routes';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles.css">

  </head>
  <body>
    <div id="root">${content}</div>


    <script src="/bundle.js"></script>
  </body>
</html>
`;
};