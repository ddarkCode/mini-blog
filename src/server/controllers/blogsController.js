import Blog from '../model/Blog';
import debug from 'debug';

const log = debug('app:blogsController');

export default (function controller() {
  return {
    getBlogs: (req, res) => {
      (async function getBlogs() {
        try {
          const { blogs } = req;

          const query = {};
          if (req.query.authorId) {
            query.authorId = req.query.authorId;
          }
          const foundBlogs = await Blog.find(query);
          if (foundBlogs.length === 0) {
            const results = await Blog.insertMany(blogs);
            const resultsToReturn = results.map((blog) => {
              const newBlog = blog.toJSON();
              newBlog.links = {};
              newBlog.links.self = `http://${req.headers.host}/api/blogs/${blog._id}`;
              return newBlog;
            });
            return res.json(resultsToReturn);
          }
          const blogsWithLinks = foundBlogs.map((blog) => {
            const newBlog = blog.toJSON();
            newBlog.links = {};
            newBlog.links.self = `http://${req.headers.host}/api/blogs/${blog._id}`;
            return newBlog;
          });

          return res.status(200).json(blogsWithLinks);
        } catch (err) {
          log(err);
        }
      })();
    },
    postNewBlog: (req, res) => {
      (async function postNewBlog() {
        if (req.isAuthenticated()) {
          try {
            const { title, content, authorId } = req.body;
            const newBlog = new Blog({
              title,
              authorId,
              content,
            });
            const savedBlog = await newBlog.save();
            const newBlogWithLink = savedBlog.toJSON();
            newBlogWithLink.links = {};
            newBlogWithLink.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${newBlog.authorId}`;
            return res.status(201).json(newBlogWithLink);
          } catch (err) {
            log(err);
          }
        } else {
          return res.status(403).json({
            message: 'You must be logged in to post a new blog',
          });
        }
      })();
    },
    deleteAllBlogs: (req, res) => {
      (async function deleteAllBlogs() {
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
      })();
    },
    getBlog: (req, res) => {
      (async function getBlog() {
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
      })();
    },
    replaceBlog: (req, res) => {
      (async function updateBlog() {
        if (req.isAuthenticated()) {
          try {
            const { blogId } = req.params;
            const { blog } = req;
            if (req.body._id) {
              delete req.body._id;
            }
            if (req.user._id === blog.authorId || req.user.isAdmin) {
              const updateInfo = await Blog.replaceOne(
                { _id: blogId },
                req.body
              );
              const updatedBlog = await Blog.findById(blogId);
              const updatedBlogWithLinks = updatedBlog.toJSON();
              updatedBlogWithLinks.links = {};
              updatedBlogWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${updatedBlog.authorId}`;
              return res.status(200).json({
                message: 'Blog Updated Successfully',
                blog: updatedBlogWithLinks,
              });
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
      })();
    },
    updateBlog: (req, res) => {
      (async function updateBlog() {
        if (req.isAuthenticated()) {
          try {
            const { blogId } = req.params;
            const { blog } = req;
            if (req.body._id) {
              delete req.body._id;
            }
            if (req.user._id === blog.authorId || req.user.isAdmin) {
              const updateInfo = await Blog.updateOne(
                { _id: blogId },
                req.body
              );
              const updatedBlog = await Blog.findById(blogId);
              const updatedBlogWithLinks = updatedBlog.toJSON();
              updatedBlogWithLinks.links = {};
              updatedBlogWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${updatedBlog.authorId}`;
              return res.status(200).json({
                message: 'Blog Updated Successfully',
                blog: updatedBlogWithLinks,
              });
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
      })();
    },
    deleteBlog: (req, res) => {
      (async function deleteBlog() {
        if (req.isAuthenticated()) {
          try {
            const { blogId } = req.params;
            const { blog } = req;
            if (req.user._id === blog.authorId || req.user.isAdmin) {
              const deletionInfo = await Blog.deleteOne({ _id: blogId });
              return res.status(200).json({
                message: 'Blog deleted successfully.',
                deletionInfo,
              });
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
            message: 'You must be logged in to perform this operation',
          });
        }
      })();
    },
  };
})();
