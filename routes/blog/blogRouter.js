import debug from 'debug';
import { Router } from 'express';

import Blog from '../../model/blog/Blog';

const routes = () => {
  const blogRouter = Router();
  blogRouter.route('/').get((req, res) => {
    (async function getBlogs() {
      try {
        const blogs = await Blog.find({});
        return res.status(200).json(blogs);
      } catch (err) {
        debug(err);
        return res.status(500).json(err);
      }
    })();
  });
  return blogRouter;
};

module.exports = routes;
