import { Router } from 'express';

import authController from '../controllers/authController';

const { register, login, logout } = authController;

const routes = () => {
  const authRoutes = Router();
  authRoutes.route('/register').post(register);
  authRoutes.route('/login').post(login);
  authRoutes.route('/logout').get(logout);
  return authRoutes;
};

export default routes;
