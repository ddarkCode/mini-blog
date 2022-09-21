import { Strategy } from 'passport-local';
import passport from 'passport';
import { compareSync } from 'bcrypt';

import User from '../../model/User';

export const localStrategy = () => {
  passport.use(
    new Strategy((username, password, done) => {
      try {
        (async function getUser() {
          const user = await User.findOne({ username });
          if (!user) {
            return done(null, false);
          }
          if (compareSync(password, user.password) !== true) {
            return done(null, false);
          }
          return done(null, user);
        })();
      } catch (err) {
        return done(err);
      }
    })
  );
};
