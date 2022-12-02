import React from 'react';

import App from './App';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import BlogPage from './pages/blogs/BlogPage';
import BlogListPage from './pages/blogs/BlogListPage';
import SingleBlogPage from './pages/blogs/SingleBlogPage';
import AddNewBlogPage from './pages/blogs/AddNewBlogPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import OptionsPage from './pages/options/OptionsPage';
import UserBlogListPage from './pages/blogs/UserBlogListPage';

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
      {
        path: '/options',
        ...OptionsPage,
      },
      {
        path: '/user/blogs',
        ...UserBlogListPage,
      },
      {
        ...BlogPage,
        routes: [
          {
            exact: true,
            path: '/blogs',
            ...BlogListPage,
          },
          {
            path: '/blogs/:blogId',
            exact: true,
            ...SingleBlogPage,
          },
          {
            path: '/blogs/write/new-blog',
            ...AddNewBlogPage,
          },
          {
            ...NotFoundPage,
          },
        ],
      },
    ],
  },
];
