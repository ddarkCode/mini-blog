import dotenv from 'dotenv';
import express from 'express';
import deb from 'debug';
import morgan from 'morgan';
import { matchRoutes } from 'react-router-config';

dotenv.config();

import config from './config';
import renderer from './server/helpers/renderer';
import blogRoutes from './server/routes/blogRoutes';
import createStore from './server/helpers/createStore';
import Routes from './client/Routes';

const app = express();
const debug = deb('app');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/blogs', blogRoutes());

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    const content = renderer(req, store);
    res.send(content);
  });
});

app.listen(config.port, config.host, () =>
  debug(`Server is running on port ${config.port}`)
);
