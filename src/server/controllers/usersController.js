import debug from 'debug';
import { hashSync, compareSync } from 'bcrypt';
import { ObjectId } from 'mongoose';

import User from '../model/User';

const log = debug('app:userController');
const { SALT_ROUNDS } = process.env;

export default (function controller() {
  return {
    getUsers: (req, res) => {
      (async function getAllUsers() {
        try {
          if (req.query.userId) {
            const user = User.findById(req.query.userId);
            if (!user) {
              return res
                .status(404)
                .json({ message: 'No such user in our database.' });
            }
            const userWithLinks = user.toJSON();
            userWithLinks.links = {};
            userWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${user._id}`;
            return res.status(200).json(userWithLinks);
          }
          const users = await User.find({});
          if (users.length === 0) {
            return res
              .status(404)
              .json({ message: 'No users in our database yet.' });
          }
          const usersWithFilter = users.map((user) => {
            const userWithLinks = user.toJSON();
            userWithLinks.links = {};
            userWithLinks.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${user._id}`;
            return userWithLinks;
          });

          return res.status(200).json(usersWithFilter);
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    deleteUsers: (req, res) => {
      (async function deleteUsers() {
        if (req.isAuthenticated()) {
          if (req.user.isAdmin) {
            try {
              const deletedUsers = await User.deleteMany({});
              return res.status(200).json({
                message: 'All users deleted.',
                databaseMessage: deletedUsers,
              });
            } catch (err) {
              log(err);
              return res.status(500).json(err);
            }
          } else {
            return res.status(403).json({
              message: 'Must be an Admin to perform this operation.',
            });
          }
        } else {
          return res.status(403).json({
            message: 'Must be logged in to perform this operation.',
          });
        }
      })();
    },
    getUser: (req, res) => {
      (async function getUser() {
        try {
          const { foundUser } = req;
          const userWithLinks = foundUser.toJSON();
          userWithLinks.links = {};
          userWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${foundUser._id}`;
          return res.status(200).json(userWithLinks);
        } catch (err) {
          log(err);
          return res.status(500).json({ err });
        }
      })();
    },
    replaceProfile: (req, res) => {
      (async function replaceProfile() {
        if (req.isAuthenticated()) {
          try {
            if (req.body._id) {
              delete req.body._id;
            }
            const { foundUser } = req;

            if (req.body.isAdmin && foundUser.isAdmin !== true) {
              return res.status(403).json({
                message:
                  'You do not have the permission to perform this operation.',
              });
            }
            if (
              req.user.username === foundUser.username ||
              req.user.isAdmin === true
            ) {
              if (req.body.password) {
                req.body.password = hashSync(req.body.password, +SALT_ROUNDS);
              }
              const updateInfo = await User.replaceOne(
                { _id: foundUser._id },
                req.body
              );
              const updatedUser = await User.findById(foundUser._id);
              const updatedUserWithLinks = updatedUser.toJSON();
              updatedUserWithLinks.links = {};
              updatedUserWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${foundUser._id}`;

              return res.status(200).json({
                message: 'Account updated successfully',
                user: updatedUserWithLinks,
              });
            }

            return res
              .status(403)
              .json({ message: 'Can only update your own account' });
          } catch (err) {
            log(err);
            return res.status(500).json(err);
          }
        } else {
          return res.status(403).json({
            message: 'Must be logged in to perform such operation.',
          });
        }
      })();
    },
    updateProfile: (req, res) => {
      (async function replaceProfile() {
        if (req.isAuthenticated()) {
          try {
            if (req.body._id) {
              delete req.body._id;
            }
            const { foundUser } = req;

            if (req.body.isAdmin && foundUser.isAdmin !== true) {
              return res.status(403).json({
                message:
                  'You do not have the permission to perform this operation.',
              });
            }
            if (
              req.user.username === foundUser.username ||
              req.user.isAdmin === true
            ) {
              if (req.body.password) {
                req.body.password = hashSync(req.body.password, +SALT_ROUNDS);
              }
              const updateInfo = await User.updateOne(
                { _id: foundUser._id },
                req.body
              );
              const updatedUser = await User.findById(foundUser._id);
              const updatedUserWithLinks = updatedUser.toJSON();
              updatedUserWithLinks.links = {};
              updatedUserWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${foundUser._id}`;

              return res.status(200).json({
                message: 'Account updated successfully',
                user: updatedUserWithLinks,
              });
            }

            return res
              .status(403)
              .json({ message: 'Can only update your own account' });
          } catch (err) {
            log(err);
            return res.status(500).json(err);
          }
        } else {
          return res.status(403).json({
            message: 'Must be logged in to perform such operation.',
          });
        }
      })();
    },

    deleteUser: (req, res) => {
      (async function deleteUser() {
        if (req.isAuthenticated()) {
          try {
            const { foundUser } = req;
            if (req.user.username === foundUser.username || req.user.isAdmin) {
              const deletionInfo = await User.deleteOne({ _id: foundUser._id });
              return res.status(200).json({
                message: 'User account deleted successfully.',
                deletionInfo,
              });
            } else {
              return res.status(403).json({
                message:
                  'You do not have the required permission to perform this operation.',
              });
            }
          } catch (err) {
            log(err);
            return res.status(500).json(err);
          }
        } else {
          return res.status(403).json({
            message: 'Must be an account owner to perform such operation.',
          });
        }
      })();
    },
  };
})();
