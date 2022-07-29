require('dotenv').config();
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';
import deb from 'debug';
import { connect } from 'mongoose';

import config from './config';
import serverRender from './src/renderer/serverRender';
import blogRouter from './routes/blog/blogRouter';

const debug = deb('app');
const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

connect(process.env.MONGO_URL, {}, (err) => {
  if (err) {
    debug(`Database connection error: `, err);
  } else {
    debug('Database Connected Successfully');
  }
});

app.use('/api/blogs', blogRouter());

app.get('*', async (req, res) => {
  const { initialMarkup, initialData } = await serverRender(req);

  res.render('index', {
    initialData,
    initialMarkup,
  });
});

app.listen(config.port, () => {
  debug(`Server is running on port ${config.port}`);
});
