import { Router } from 'express';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import debug from 'debug';

import Blog from '../model/Blog';
import blogsController from '../controllers/blogsController';

const blogsFilePath = join('src', 'db', 'blogs.json');
const log = debug('app:blogRoutes');

const {
  getBlogs,
  getBlog,
  updateBlog,
  deleteAllBlogs,
  deleteBlog,
  postNewBlog,
} = blogsController;

const router = () => {
  const blogRoutes = Router();
  blogRoutes.use((req, res, next) => {
    try {
      const blogs = readFileSync(blogsFilePath, 'utf8');
      const parsedBlogs = JSON.parse(blogs).map((blog) => {
        return {
          ...blog,
          content: blog.post.join(' '),
        };
      });
      req.blogs = parsedBlogs;
      next();
    } catch (err) {
      log(err);
      return res.status(500).json(err);
    }
  });
  blogRoutes.route('/').get(getBlogs).post(postNewBlog).delete(deleteAllBlogs);
  blogRoutes
    .route('/:blogId')
    .all((req, res, next) => {
      (async function getBlog() {
        try {
          const { blogId } = req.params;
          const blog = await Blog.findById(blogId);
          if (!blog) {
            return res
              .status(404)
              .json({ message: 'No such blog in our database.' });
          } else {
            req.blog = blog;
            next();
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    })
    .get(getBlog)
    .put((req, res) => {
      updateBlog(req, res, Blog.replaceOne);
    })
    .patch((req, res) => {
      updateBlog(req, res, Blog.updateOne);
    })
    .delete(deleteBlog);

  return blogRoutes;
};

export default router;
