const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');

passport.use( 
    new GoogleStrategy(
        {
            //options
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/redirect'
        },
        (accessToken, refreshToken, profile, done) => {
            //console.log(profile);
            db.Users.create({
                email: "this little tacos e-mail",
                name:  "this little tacos name",
                img: "this little tacos profile photo"
            }).then((user, created) => {
                console.log("user was saved to database")
                done(null, user)
                // res.redirect(307, "")
            }).catch((err) => {
                console.log(err);
                res.json(err)
                console.log("some things happened, route was hit, but did not work")
            })
        }
    )
);

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.Users.findById(id).then((user) => {
       
        done(null, user);
    });
});

module.exports = passport;