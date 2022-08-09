import React from 'react';

import App from './App';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...HomePage,
      },
      {
        path: '/register',
        ...RegisterPage,
      },
      {
        path: '/login',
        ...LoginPage,
      },
    ],
  },
];
