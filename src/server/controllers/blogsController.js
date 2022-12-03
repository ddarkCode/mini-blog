import Blog from '../model/Blog';
import debug from 'debug';

const log = debug('app:blogsController');

export default (function controller() {
  return {
    getBlogs: (req, res) => {
      (async function getBlogs(req, res) {
        try {
          const query = {};
          if (req.query.authorId) {
            query.authorId = req.query.authorId;
          }
          const foundBlogs = await Blog.find(query);

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
      })(req, res);
    },
    postNewBlog: (req, res) => {
      (async function postNewBlog(req, res) {
        try {
          const { title, content } = req.body;
          const newBlog = new Blog({
            title,
            authorId: req.user._id,
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

        return res.status(403).json({
          message: 'You must be logged in to post a new blog',
        });
      })(req, res);
    },
    deleteAllBlogs: (req, res) => {
      (async function deleteAllBlogs(req, res) {
        if (req.user.isAdmin) {
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
      })(req, res);
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
      (async function replaceBlog() {
        try {
          const { blog } = req;
          if (req.body._id) {
            delete req.body._id;
          }
          if (req.user._id === blog.authorId) {
            req.body.authorId = req.user._id;
            const updateInfo = await Blog.replaceOne(
              { _id: blog._id },
              req.body
            );
            const updatedBlog = await Blog.findById(blog._id);
            const updatedBlogWithLinks = updatedBlog.toJSON();
            updatedBlogWithLinks.links = {};
            updatedBlogWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${blog.authorId}`;
            return res.status(200).json({
              message: 'Blog Updated Successfully',
              blog: updatedBlogWithLinks,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do Not Have The Permission To Perform This Operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    updateBlog: (req, res) => {
      (async function updateBlog() {
        try {
          const { blog } = req;

          if (req.body._id) {
            delete req.body._id;
          }
          if (req.user._id === blog.authorId) {
            const updateInfo = await Blog.updateOne(
              { _id: blog._id },
              req.body
            );
            const updatedBlog = await Blog.findById(blog._id);
            const updatedBlogWithLinks = updatedBlog.toJSON();
            updatedBlogWithLinks.links = {};
            updatedBlogWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${blog.authorId}`;
            return res.status(200).json({
              message: 'Blog Updated Successfully',
              blog: updatedBlogWithLinks,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do Not Have The Permission To Perform This Operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    deleteBlog: (req, res) => {
      (async function deleteBlog() {
        try {
          const { blog } = req;
          if (req.user._id === blog.authorId) {
            const deletionInfo = await Blog.deleteOne({ _id: blog._id });
            return res.status(200).json({
              message: 'Blog deleted successfully.',
              deletionInfo,
              deletedBlogId: blog._id,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do Not Have The Permission To Perform This Operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
  };
})();
