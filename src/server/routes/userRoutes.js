import { Router } from 'express';
import debug from 'debug';

import User from '../model/User';
import usersController from '../controllers/usersController';

const log = debug('app:userRoutes');

const {
  getUsers,
  deleteUsers,
  getUser,
  updateProfile,
  replaceProfile,
  deleteUser,
} = usersController;

const routes = () => {
  const userRoutes = Router();
  userRoutes.route('/').get(getUsers).delete(deleteUsers);
  userRoutes
    .route('/:userId')
    .all((req, res, next) => {
      (async function getUser() {
        try {
          const { userId } = req.params;
          const foundUser = await User.findOne({ _id: userId });
          log('Middleware: ', foundUser);
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
    .get(getUser)
    .put(replaceProfile)
    .patch(updateProfile)
    .delete(deleteUser);

  return userRoutes;
};

export default routes;
