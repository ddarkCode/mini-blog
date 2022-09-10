import { Router } from 'express';
import debug from 'debug';
import { ObjectId } from 'mongoose';

import User from '../model/User';

const log = debug('app:authorRoutes');

const routes = () => {
  const userRoutes = Router();
  userRoutes
    .route('/')
    .get(async (req, res) => {
      try {
        const query = {};
        if (req.query.userId) {
          query._id = ObjectId(req.query.userId);
        }
        const users = await User.find(query);
        if (!users) {
          return res
            .status(404)
            .json({ message: 'No such user in our database.' });
        }
        return res.status(200).json(users);
      } catch (err) {
        log(err);
        return res.status(500).json(err);
      }
    })
    .delete((req, res) => {
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
            return res
              .status(403)
              .json({ message: 'Must be an Admin to perform such operation.' });
          }
        }
      })();
    });
  userRoutes
    .route('/:userId')
    .all((req, res, next) => {
      (async function getUser() {
        try {
          const { userId } = req.params;
          const foundUser = await User.findById(userId);
          if (!foundUser) {
            return res
              .status(404)
              .json({ message: 'No such user in our database.' });
          }
          req.foundUser = foundUser;
          next();
        } catch (err) {
          return res.status(500).json({ err });
        }
      })();
    })
    .get((req, res) => {
      (async function getUser() {
        try {
          const { foundUser } = req;
          return res.status(200).json(foundUser);
        } catch (err) {
          log(err);
          return res.status(500).json({ err });
        }
      })();
    })
    .put((req, res) => {
      (async function replaceProfile() {
        if (req.isAuthenticated()) {
          try {
            if (req.body._id) {
              delete req.body._id;
            }
            const { foundUser } = req;

            if (req.body.isAdmin && req.user.isAdmin !== true) {
              return res.status(403).json({
                message:
                  'You do not have the permission to perform this operation.',
              });
            }

            if (
              (req.user.username === foundUser.username &&
                req.user.password === foundUser.password) ||
              req.user.isAdmin === true
            ) {
              const updateInfo = await User.replaceOne(
                { _id: foundUser._id },
                req.body
              );
              return res.status(200).json({
                message: 'Account updated successfully',
                updateInfo,
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
            message: 'Must be an account owner to perform such operation.',
          });
        }
      })();
    })
    .patch((req, res) => {
      (async function replaceProfile() {
        if (req.isAuthenticated()) {
          try {
            if (req.body._id) {
              delete req.body._id;
            }
            const { foundUser } = req;

            if (req.body.isAdmin && req.user.isAdmin !== true) {
              return res.status(403).json({
                message:
                  'You do not have the permission to perform this operation.',
              });
            }

            if (
              (req.user.username === foundUser.username &&
                req.user.password === foundUser.password) ||
              req.user.isAdmin === true
            ) {
              const updateInfo = await User.updateOne(
                { _id: foundUser._id },
                req.body
              );
              return res.status(200).json({
                message: 'Account updated successfully',
                updateInfo,
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
            message: 'Must be an account owner to perform such operation.',
          });
        }
      })();
    })
    .delete((req, res) => {
      (async function deleteUser() {
        if (req.isAuthenticated()) {
          try {
            const { foundUser } = req;
            if (
              (req.user.username === foundUser.username &&
                req.user.password === foundUser.password) ||
              req.user.isAdmin
            ) {
              const deletionInfo = await User.deleteOne({ _id: foundUser._id });
              log(deletionInfo);
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
    });

  return userRoutes;
};

export default routes;
