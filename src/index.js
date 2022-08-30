import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import deb from 'debug';
import morgan from 'morgan';
import { matchRoutes } from 'react-router-config';
import session from 'express-session';

import renderer from './server/helpers/renderer';
import Routes from './client/Routes';
import configureStoreKit from './server/helpers/configureStore';

import blogRoutes from './server/routes/blogRoutes';
import authRoutes from './server/routes/authRoutes';
import { passportConfig } from './server/passport/passport';

const app = express();
const debug = deb('app');
const { HOST, PORT, SECRET } = process.env;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Auth Config
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
passportConfig(app);

app.use('/api/blogs', blogRoutes());
app.use('/api/auth', authRoutes());

app.get('*', (req, res) => {
  const store = configureStoreKit({});

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    const content = renderer(req, store);
    res.send(content);
  });
});

app.listen(PORT, HOST, () => debug(`Server is running on port ${PORT}`));
