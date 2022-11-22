import { Router } from 'express';
import debug from 'debug';
import passport from 'passport';

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
  userRoutes
    .route('/')
    .get(getUsers)
    .delete(passport.authenticate('jwt', { session: false }), deleteUsers);
  userRoutes
    .route('/:userId')
    .get(getUser)
    .put(passport.authenticate('jwt', { session: false }), replaceProfile)
    .patch(passport.authenticate('jwt', { session: false }), updateProfile)
    .delete(passport.authenticate('jwt', { session: false }), deleteUser);

  return userRoutes;
};

export default routes;
