import { Router } from 'express';
import { readFile, readFileSync, writeFile } from 'fs';
const { join } = require('path');

const blogsFilePath = join('src', 'db', 'blogs.json');

const router = () => {
  const blogRoutes = Router();
  blogRoutes
    .route('/')
    .get((req, res) => {
      readFile(blogsFilePath, 'utf8', (err, blogs) => {
        if (err) {
          return res.json(err);
        }
        const parsedBlogs = JSON.parse(blogs).map((blog) => {
          return {
            ...blog,
            post: blog.post.join(),
            date: new Date(),
          };
        });
        return res.json(parsedBlogs);
      });
    })
    .post((req, res) => {
      const { title, id, post, author } = req.body;
      const newBlog = {
        title,
        id,
        author,
        post: post.split('.'),
      };
      const parsedBlogs = JSON.parse(readFileSync(blogsFilePath, 'utf-8'));
      parsedBlogs.push(newBlog);
      writeFile(blogsFilePath, JSON.stringify(parsedBlogs), (err) => {
        res.json({ message: 'New Blog Added Successfully' });
      });
    });

  return blogRoutes;
};

export default router;
