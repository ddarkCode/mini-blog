import { Router } from 'express';
import passport from 'passport';

import { userInputValidator } from '../validators/userValidator';
import authController from '../controllers/authController';
const { register, login, logout } = authController;

const routes = () => {
  const authRoutes = Router();
  authRoutes
    .route('/register')
    .post(
      userInputValidator,
      passport.authenticate('register', { session: false }),
      register
    );
  authRoutes.route('/login').post((req, res, next) => {
    return passport.authenticate(
      'login',
      { session: false },
      (err, user, info) => {
        login(req, res, { err, user, info });
      }
    )(req, res, next);
  });

  authRoutes.route('/logout').get(logout);
  return authRoutes;
};

export default routes;
