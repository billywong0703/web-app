import User from '../models/user.js';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import keys from "../config/keys.js";


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt.secret
};

// check user
passport.use(new JwtStrategy(opts, async (payload, done) => {
    try {
        const user = await User.findById({ _id: payload.id });

        if (!user) return done(null, false);

        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
}));

const passportInitialize = async (app) => {
    passport.initialize();
}

export default passportInitialize

