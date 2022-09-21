import debug from 'debug';
import passport from 'passport';
import { hashSync, compareSync } from 'bcrypt';

import User from '../model/User';

const log = debug('app:authController');
const { SALT_ROUNDS } = process.env;

export default (function controller() {
  return {
    register: (req, res) => {
      (async function registerUser() {
        try {
          if (req.body.isAdmin) {
            return res.status(403).json({
              message: 'Registration with administrative right not allowed',
            });
          }
          const { username, password, fullname } = req.body;
          const userExist = await User.findOne({ username });
          if (userExist) {
            return res.status(409).json({
              message: 'User Already Exists',
            });
          }
          const hash = hashSync(password, +SALT_ROUNDS);
          const newUser = new User({
            username,
            password: hash,
            fullname,
          });
          const savedUser = await newUser.save();
          const userWithLinks = savedUser.toJSON();
          userWithLinks.links = {};
          userWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${savedUser._id}`;
          passport.authenticate('local')(req, res, () => {
            return res.status(201).json({ user: userWithLinks });
          });
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    login: (req, res) => {
      (async function loginUser() {
        try {
          const { username, password } = req.body;
          const foundUser = await User.findOne({ username });
          if (
            !foundUser ||
            compareSync(password, foundUser.password) !== true
          ) {
            return res.status(403).json({
              user: null,
              message: 'Incorrect username or password',
            });
          }
          const userWithLinks = foundUser.toJSON();
          userWithLinks.links = {};
          userWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${foundUser._id}`;
          passport.authenticate('local')(req, res, () => {
            return res.status(200).json({ user: userWithLinks });
          });
        } catch (error) {
          log(error);
        }
      })();
    },
    logout: (req, res) => {
      (function logoutUser() {
        try {
          req.logout(() => {
            return res.status(200).json({
              message: 'You have successfully logged out from your account.',
              user: null,
            });
          });
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
  };
})();
