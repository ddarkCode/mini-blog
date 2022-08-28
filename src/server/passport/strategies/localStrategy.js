import { Strategy } from 'passport-local';
import passport from 'passport';
import { readFile, readFileSync } from 'fs';
import { join } from 'path';

const usersFilePath = join('src', 'db', 'users.json');

export const localStrategy = () => {
  passport.use(
    new Strategy((username, password, done) => {
      try {
        const usersInDb = readFileSync(usersFilePath, 'utf-8');
        const foundUser = JSON.parse(usersInDb).find(
          (user) => user.username === username && user.password === password
        );
        console.log(
          `Passport Local Strategy FOund User: ${JSON.stringify(foundUser)}`
        );
        if (!foundUser) {
          return done(null, false);
        }
        return done(null, foundUser);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    })
  );
};
