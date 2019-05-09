const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');

passport.use( 
    new GoogleStrategy(
        {
            //options
            clientID: process.env.GOOGLE_CLIENT_ID,
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
            ).then((user, created) => {
                //console.log(user.dataValues);
                done(null, user);
            });
        }
    )
);

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.User.findById(id).then((user) => {
       
        done(null, user);
    });
});

module.exports = passport;