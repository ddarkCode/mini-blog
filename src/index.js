import dotenv from 'dotenv';
import express from 'express';
import deb from 'debug';
import morgan from 'morgan';

dotenv.config();

import config from './config';
import renderer from './server/helpers/renderer';

const app = express();
const debug = deb('app');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const content = renderer(req);
  res.send(content);
});

app.listen(config.port, config.host, () =>
  debug(`Server is running on port ${config.port}`)
);
