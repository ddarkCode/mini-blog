const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

function jwtStrategy() {
  const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('blogger-token'),
  };

  passport.use(
    new Strategy(options, (user, done) => {
      try {
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
}

export default jwtStrategy;
