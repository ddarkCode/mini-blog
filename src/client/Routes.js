import React from 'react';

import App from './App';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import UpdateProfilePage from './pages/auth/UpdateProfilePage';
import BlogPage from './pages/blogs/BlogPage';
import BlogListPage from './pages/blogs/BlogListPage';
import SingleBlogPage from './pages/blogs/SingleBlogPage';
import AddNewBlogPage from './pages/blogs/AddNewBlogPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import OptionsPage from './pages/options/OptionsPage';
import UserBlogListPage from './pages/blogs/UserBlogListPage';
import UpdateBlogPage from './pages/blogs/UpdateBlogPage';

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
        path: '/user/update-profile',
        ...UpdateProfilePage,
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
        path: '/user/profile',
        ...UpdateProfilePage,
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
            exact: true,
            ...AddNewBlogPage,
          },
          {
            path: '/blogs/write/update/:blogId',
            ...UpdateBlogPage,
          },
          {
            ...NotFoundPage,
          },
        ],
      },
    ],
  },
];
