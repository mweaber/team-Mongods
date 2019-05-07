const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');

passport.use( 
    new GoogleStrategy(
        {
            //options
            clientID: "76521146114-75a1tkldbt9tr9thhf8a604ut9fvpoie.apps.googleusercontent.com",
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/redirect'
        },
        (accessToken, refreshToken, profile, done) => {
            //console.log(profile);
            db.User.findOrCreate(
                {
                    where: {
                        id: profile.id
                    },
                    defaults: {
                        email: profile.emails[0].value
                    }
                }
            ).spread((user, created) => {
                //console.log(user.dataValues);
                done(null, user);
            });
        }
    )
);

passport.serializeUser((user, done) => {
    // console.log("serialize: " + JSON.stringify(user))
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.User.findById(id).then((user) => {
        // console.log("deserialize:" + JSON.stringify(user));
        done(null, user);
    });
});

module.exports = passport;