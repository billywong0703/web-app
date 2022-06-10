import mongoose from 'mongoose';
import User from '../models/userSchema.js';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
};

passport.use(new JwtStrategy(opts, (payload, done) => {
    console.log("passport.use JwtStrategy");
    return done(null, "dgdg");
}));

const passportInitialize = async (app) => {
    console.log("passport done");
    app.use(passport.initialize());
}

export default passportInitialize

