import { Router } from 'express';
import passport from 'passport';
import debug from 'debug';

import User from '../model/User';

const log = debug('app:authRoutes');

const routes = () => {
  const authRoutes = Router();
  authRoutes.route('/register').post(async (req, res) => {
    try {
      const { username, password, fullname } = req.body;
      const newUser = new User({
        username,
        password,
        fullname,
      });
      const savedUser = await newUser.save();
      passport.authenticate('local')(req, res, () => {
        return res.status(201).json({ user: savedUser });
      });
    } catch (err) {
      log(err);
    }
  });
  authRoutes.route('/login').post(async (req, res) => {
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({ username });
      if (!foundUser || foundUser.password !== password) {
        return res.status(403).json({ user: null });
      }
      passport.authenticate('local')(req, res, () => {
        return res.status(200).json({ user: foundUser });
      });
    } catch (error) {
      log(error);
    }
  });
  authRoutes.route('/logout').get((req, res) => {
    try {
      req.logout(() => {
        return res.status(200).json({ user: null });
      });
    } catch (err) {
      log(err);
      return res.status(500).json(err);
    }
  });
  return authRoutes;
};

export default routes;
