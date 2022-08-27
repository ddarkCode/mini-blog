import { Router } from 'express';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';

import User from '../model/User';

const usersFilePath = join('src', 'db', 'users.json');

const routes = () => {
  const authRoutes = Router();
  authRoutes.route('/register').post((req, res) => {
    try {
      const { username, password, fullname } = req.body;
      const newUser = new User({
        username,
        password,
        fullname,
      });
      const users = JSON.parse(readFileSync(usersFilePath, 'utf-8'));
      users.push(newUser);
      writeFile(usersFilePath, JSON.stringify(users), 'utf-8', () => {
        return res.json(newUser);
      });
    } catch (err) {
      console.log(err);
    }
  });
  return authRoutes;
};

export default routes;
