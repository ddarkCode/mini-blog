import debug from 'debug';

import User from '../model/User';

const log = debug('app:userController');

export default (function controller() {
  return {
    getUsers: (req, res) => {
      (async function getAllUsers() {
        try {
          const users = await User.find({});
          if (users.length === 0) {
            return res
              .status(404)
              .json({ message: 'No users in our database yet.' });
          }
          const mappedUsers = users.map((user) => {
            const userWithLink = {
              _id: user._id,
              username: user.username,
              fullname: user.fullname,
              img_url: user.img_url,
              isAdmin: user.isAdmin,
            };

            userWithLink.links = {};
            userWithLink.links.filteredByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${user._id}`;
            return userWithLink;
          });

          return res.status(200).json(mappedUsers);
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    deleteUsers: (req, res) => {
      (async function deleteUsers() {
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
      })();
    },
    getUser: (req, res) => {
      (async function getUser() {
        try {
          const { userId } = req.params;
          const foundUser = await User.findOne({ _id: userId });
          if (!foundUser) {
            return res
              .status(404)
              .json({ message: 'No such user in our database.' });
          }

          const userWithLinks = {
            _id: foundUser._id,
            username: foundUser.username,
            fullname: foundUser.fullname,
            img_url: foundUser.img_url,
            isAdmin: foundUser.isAdmin,
          };
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
      (async function updateProfile() {
        const { userId } = req.params;
        try {
          if (req.body._id) {
            delete req.body._id;
          }
          if (req.body.isAdmin) {
            delete req.body.isAdmin;
          }

          if (req.user._id === userId) {
            const updateInfo = await User.replaceOne({ _id: userId }, req.body);
            const updatedUser = await User.findById(userId);
            const updatedUserWithLinks = {
              _id: updatedUser._id,
              username: updatedUser.username,
              fullname: updatedUser.fullname,
              img_url: updatedUser.img_url,
              isAdmin: updatedUser.isAdmin,
            };
            updatedUserWithLinks.links = {};
            updatedUserWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${userId}`;

            return res.status(200).json({
              message: 'Account updated successfully',
              user: updatedUserWithLinks,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do not Have The Necessary Permission To Perform This Operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },
    updateProfile: (req, res) => {
      (async function updateProfile() {
        const { userId } = req.params;
        try {
          if (req.body._id) {
            delete req.body._id;
          }
          if (req.body.isAdmin) {
            delete req.body.isAdmin;
          }

          if (req.user._id === userId) {
            const updateInfo = await User.updateOne({ _id: userId }, req.body);
            const updatedUser = await User.findById(userId);
            const updatedUserWithLinks = {
              _id: updatedUser._id,
              username: updatedUser.username,
              fullname: updatedUser.fullname,
              img_url: updatedUser.img_url,
              isAdmin: updatedUser.isAdmin,
            };
            updatedUserWithLinks.links = {};
            updatedUserWithLinks.links.filteredBlogsByThisAuthor = `http://${req.headers.host}/api/blogs/?authorId=${userId}`;

            return res.status(200).json({
              message: 'Account updated successfully',
              user: updatedUserWithLinks,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do not Have The Necessary Permission To Perform This Operation.',
            });
          }
        } catch (err) {
          log(err);
          return res.status(500).json(err);
        }
      })();
    },

    deleteUser: (req, res) => {
      (async function deleteUser() {
        try {
          const { userId } = req.params;
          if (req.user._id === userId || req.user.isAdmin) {
            const deletionInfo = await User.deleteOne({ _id: userId });
            return res.status(200).json({
              message: 'User Account Deleted Successfully.',
              deletionInfo,
            });
          } else {
            return res.status(403).json({
              message:
                'You Do Not Have The Required Permission To Perform This Operation.',
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
