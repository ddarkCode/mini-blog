import { Strategy } from 'passport-local';
import passport from 'passport';

import User from '../../model/User';

const localStrategy = () => {
  passport.use(
    'login',
    new Strategy((username, password, done) => {
      try {
        (async function getUser() {
          const user = await User.findOne({ username });
          if (!user) {
            return done(null, false);
          }
          if (!user.verifyPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        })();
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.use(
    'register',
    new Strategy(
      { passReqToCallback: true },
      async (req, username, password, done) => {
        try {
          const { fullname, img_url, isAdmin } = req.body;
          const emailTest = /(\w+)\@(\w+)\.[a-zA-Z]/g;
          if (!emailTest.test(username)) {
            throw new Error('Plese Enter  valid email address.');
          }
          if (isAdmin) {
            throw new Error(
              'Registration with administrative right not allowed.'
            );
          }
          const user = await User.create({
            username,
            password,
            fullname,
            img_url,
          });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};

export default localStrategy;
