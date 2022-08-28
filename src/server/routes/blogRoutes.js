import { Router } from 'express';
import { readFileSync, writeFile } from 'fs';
const { join } = require('path');

import Blog from '../model/Blog';

const blogsFilePath = join('src', 'db', 'blogs.json');

const router = () => {
  const blogRoutes = Router();
  blogRoutes;
  blogRoutes
    .use((req, res, next) => {
      const blogs = readFileSync(blogsFilePath, 'utf8');
      const parsedBlogs = JSON.parse(blogs).map((blog) => {
        return {
          ...blog,
          post: blog.post.join(),
          date: new Date(),
        };
      });
      req.blogs = parsedBlogs;
      next();
    })
    .route('/')
    .get((req, res) => {
      try {
        const { blogs } = req;
        return res.json(blogs);
      } catch (err) {
        console.log(err);
      }
    })
    .post((req, res) => {
      try {
        const { title, id, post, author } = req.body;
        const { blogs } = req;
        const newBlog = new Blog({
          title,
          id,
          author,
          post: post.split('.'),
        });
        blogs.push(newBlog);
        writeFile(blogsFilePath, JSON.stringify(blogs), () => {
          return res.json({
            message: 'New Blog Added Successfully',
            blog: newBlog,
          });
        });
      } catch (err) {
        console.log(err);
      }
    });
  blogRoutes.route('/:blogId').get((req, res) => {
    try {
      const { blogId } = req.params;
      const { blogs } = req;
      const requestedBlog = blogs.find((blog) => blog._id === +blogId);
      return res.json(requestedBlog);
    } catch (err) {
      console.log(err);
    }
  });

  return blogRoutes;
};

export default router;
