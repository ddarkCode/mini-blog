import dotenv from 'dotenv';
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';
import deb from 'debug';

import config from './config';
import serverRender from './src/renderer/serverRender';

dotenv.config();
const debug = deb('app');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  const initialMarkup = serverRender();
  res.render('index', { initialMarkup });
});

app.listen(config.port, () => {
  debug(`Server is running on port ${config.port}`);
});
