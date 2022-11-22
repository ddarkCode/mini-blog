import passport from 'passport';

import localStrategy from './strategies/localStrategy';
import jwtStrategy from './strategies/jwtStrategy';

export const passportConfig = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { id: user.id, username: user.username });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });

  localStrategy();
  jwtStrategy();
};
