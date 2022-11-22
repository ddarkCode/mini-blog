import { Router } from 'express';
import debug from 'debug';

import Blog from '../model/Blog';
import blogsController from '../controllers/blogsController';
import passport from 'passport';

const log = debug('app:blogRoutes');

const {
  getBlogs,
  getBlog,
  replaceBlog,
  updateBlog,
  deleteAllBlogs,
  deleteBlog,
  postNewBlog,
} = blogsController;

const router = () => {
  const blogRoutes = Router();
  blogRoutes
    .route('/')
    .get(getBlogs)
    .post(passport.authenticate('jwt', { session: false }), postNewBlog)
    .delete(passport.authenticate('jwt', { session: false }), deleteAllBlogs);
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
    .put(passport.authenticate('jwt', { session: false }), replaceBlog)
    .patch(passport.authenticate('jwt', { session: false }), updateBlog)
    .delete(passport.authenticate('jwt', { session: false }), deleteBlog);

  return blogRoutes;
};

export default router;
