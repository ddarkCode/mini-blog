import { Router } from 'express';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import debug from 'debug';

import Blog from '../model/Blog';

const blogsFilePath = join('src', 'db', 'blogs.json');
const log = debug('app:blogRoutes');

const router = () => {
  const blogRoutes = Router();
  blogRoutes.use((req, res, next) => {
    const blogs = readFileSync(blogsFilePath, 'utf8');
    const parsedBlogs = JSON.parse(blogs).map((blog) => {
      return {
        ...blog,
        content: blog.post.join(' '),
      };
    });
    req.blogs = parsedBlogs;
    next();
  });
  blogRoutes
    .route('/')
    .get(async (req, res) => {
      try {
        // const { blogs } = req;
        // log(blogs);
        const query = {};
        if (req.query.authorId) {
          query.authorId = req.query.authorId;
        }
        const foundBlogs = await Blog.find(query);
        // if (foundBlogs.length === 0) {
        //   const results = await Blog.insertMany(blogs);
        //   return res.json(results);
        // }
        const blogsWithLinks = foundBlogs.map((blog) => {
          const newBlog = blog.toJSON();
          newBlog.links = {};
          newBlog.links.self = `http://${req.headers.host}/api/blogs/${blog._id}`;
          return newBlog;
        });

        return res.json(blogsWithLinks);
      } catch (err) {
        log(err);
      }
    })
    .post(async (req, res) => {
      if (req.isAuthenticated()) {
        try {
          const { title, content, authorId } = req.body;
          // const { blogs } = req;
          const newBlog = new Blog({
            title,
            authorId,
            content,
          });
          // blogs.push(newBlog);
          // writeFile(blogsFilePath, JSON.stringify(blogs), () => {
          //   return res.json({
          //     message: 'New Blog Added Successfully',
          //     blog: newBlog,
          //   });
          // });
          const savedBlog = await newBlog.save();
          const newBlogWithLink = savedBlog.toJSON();
          newBlogWithLink.links = {};
          newBlogWithLink.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${newBlog.authorId}`;
          return res.status(201).json(newBlogWithLink);
        } catch (err) {
          log(err);
        }
      } else {
        return res
          .status(403)
          .json({ message: 'You must be logged in to post a new blog' });
      }
    })
    .delete(async (req, res) => {
      if (req.isAuthenticated() && req.user.isAdmin) {
        try {
          const query = {};
          if (req.query.authorId) {
            query.authorId = req.query.authorId;
          }
          const results = await Blog.deleteMany(query);
          return res.status(200).json(results);
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json({
          message:
            'You do not have the required permission to perform this operation.',
        });
      }
    });
  blogRoutes
    .route('/:blogId')
    .all((req, res, next) => {
      (async function getBlog() {
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
      })();
    })
    .get(async (req, res) => {
      try {
        const { blog } = req;
        const newBlog = blog.toJSON();
        newBlog.links = {};
        newBlog.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${blog.authorId}`;
        return res.json(newBlog);
      } catch (err) {
        log(err);
        return res.status(500).json(err);
      }
    })
    .put(async (req, res) => {
      if (req.isAuthenticated()) {
        try {
          const { blogId } = req.params;
          const { blog } = req;
          if (req.body._id) {
            delete req.body._id;
          }
          if (req.user._id === blog.authorId || req.user.isAdmin) {
            const updateInfo = await Blog.replaceOne({ _id: blogId }, req.body);
            return res
              .status(200)
              .json({ message: 'Blog Updated Successfully', updateInfo });
          } else {
            return res.status(403).json({
              message:
                'You do not have the necessary permission to perform this operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json({
          message: 'You must be logged in to perform this operation.',
        });
      }
    })
    .patch(async (req, res) => {
      if (req.isAuthenticated()) {
        try {
          const { blogId } = req.params;
          const { blog } = req;
          if (req.body._id) {
            delete req.body._id;
          }
          if (blog.authorId === req.user._id || req.user.isAdmin) {
            const updateInfo = await Blog.updateOne(
              { _id: blogId },
              { ...req.body }
            );

            return res
              .status(200)
              .json({ message: 'Blog Updated Successfully', updateInfo });
          } else {
            return res.status(403).json({
              message:
                'You do not have the necessary permission to perform this operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      } else {
        return res
          .status(403)
          .json({ message: 'You must be logged in to perform this operation' });
      }
    })
    .delete(async (req, res) => {
      if (req.isAuthenticated()) {
        try {
          const { blogId } = req.params;
          const { blog } = req;
          if (req.user._id === blog.authorId || req.user.isAdmin) {
            const deletionInfo = await Blog.deleteOne({ _id: blogId });
            return res
              .status(200)
              .json({ message: 'Blog deleted successfully.', deletionInfo });
          } else {
            return res.status(403).json({
              message:
                'You do not have the necessary permission to perform this operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      } else {
        return res
          .status(403)
          .json({ message: 'You must be logged in to perform this operation' });
      }
    });

  return blogRoutes;
};

export default router;
