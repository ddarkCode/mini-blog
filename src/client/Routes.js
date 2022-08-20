import React from 'react';

import App from './App';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import BlogPage from './pages/blogs/BlogPage';
import BlogListPage from './pages/blogs/BlogListPage';
import SingleBlogPage from './pages/blogs/SingleBlogPage';
import AddNewBlogPage from './pages/blogs/AddNewBlogPage';

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
        ],
      },
    ],
  },
];
