import debug from 'debug';
import jwt from 'jsonwebtoken';

const log = debug('app:authController');

export default (function controller() {
  return {
    register: (req, res) => {
      (async function registerUser() {
        try {
          const userWithLink = {
            _id: req.user._id,
            username: req.user.username,
            fullname: req.user.fullname,
            img_url: req.user.img_url,
            isAdmin: req.user.isAdmin,
          };
          userWithLink.links = {};
          userWithLink.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${req.user._id}`;

          const token = jwt.sign(userWithLink, process.env.JWT_SECRET);

          return res
            .status(201)
            .json({ token, online: true, profile: userWithLink });
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    login: (req, res, { err, user, info }) => {
      if (err) {
        log(err);
        return res.status(500).json({ err, info });
      }
      if (!user) {
        log(user);
        return res
          .status(403)
          .json({ message: 'Incorrect username or password.', info });
      }
      const userWithLink = {
        _id: user._id,
        username: user.username,
        fullname: user.fullname,
        img_url: user.img_url,
        isAdmin: user.isAdmin,
      };
      userWithLink.links = {};
      userWithLink.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${user._id}`;
      const token = jwt.sign(userWithLink, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ token, online: true, profile: userWithLink });
    },

    logout: (req, res) => {
      try {
        req.logout(() => {
          return res
            .status(200)
            .json({ token: null, profile: null, online: false });
        });
      } catch (err) {
        log(err);
        return res.status(500).json(err);
      }
    },
  };
})();
