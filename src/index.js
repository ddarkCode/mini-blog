import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import deb from 'debug';
import morgan from 'morgan';
import { matchRoutes } from 'react-router-config';
import session from 'express-session';
import { connect } from 'mongoose';

import renderer from './server/helpers/renderer';
import createStore from './server/helpers/createStore';
import Routes from './client/Routes';

import blogRoutes from './server/routes/blogRoutes';
import authRoutes from './server/routes/authRoutes';
import userRoutes from './server/routes/userRoutes';
import { passportConfig } from './server/passport';

const app = express();
const debug = deb('app');
const { HOST, PORT, SECRET, DATABASE_URL } = process.env;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

connect(DATABASE_URL, (err) => {
  if (err) {
    debug(err);
  } else {
    debug(`Database connected successfully.`);
  }
});

// //Auth Config
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3.156e7 },
  })
);
passportConfig(app);

app.use('/api/blogs', blogRoutes());
app.use('/api/auth', authRoutes());
app.use('/api/users', userRoutes());

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData
        ? route.loadData(store, req.path.split('/')[2])
        : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});

app.listen(PORT, HOST, () =>
  debug(`Server is running on ${HOST}, port ${PORT}`)
);
