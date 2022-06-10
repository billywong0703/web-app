import passport from "passport"

const auth = passport.authenticate('jwt', { session: false }, function (err, user) {
    console.log('now is middleware');
});

export default auth;