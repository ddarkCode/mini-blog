import { Router } from 'express';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import passport from 'passport';

import User from '../model/User';

const usersFilePath = join('src', 'db', 'users.json');

const routes = () => {
  const authRoutes = Router();
  authRoutes.use((req, res, next) => {
    const users = JSON.parse(readFileSync(usersFilePath, 'utf-8'));
    req.users = users;
    next();
  });
  authRoutes.route('/register').post((req, res) => {
    try {
      const { username, password, fullname } = req.body;
      const { users } = req;
      const newUser = new User({
        username,
        password,
        fullname,
      });
      users.push(newUser);
      writeFile(usersFilePath, JSON.stringify(users), 'utf-8', () => {
        // passport.authenticate('local')(req, res, () => {
        //   res.redirect('/secrets');
        // });
        passport.authenticate('local')(req, res, () => {
          return res.json(newUser);
        });
      });
    } catch (err) {
      console.log(err);
    }
  });
  authRoutes.route('/login').post((req, res) => {
    try {
      const { username, password } = req.body;
      const { users } = req;
      const userDetails = users.find(
        (user) => user.username === username && user.password === password
      );
      if (!userDetails) {
        return res.json({ message: 'Invalid username or password.' });
      }
      return res.json(userDetails);
    } catch (error) {
      console.log(error);
    }
  });
  return authRoutes;
};

export default routes;
