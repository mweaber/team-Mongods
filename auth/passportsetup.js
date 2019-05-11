const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');

passport.use(
    new GoogleStrategy(
        {
            callbackURL:'/api/auth/google/redirect',
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        },
        (accessToken, refreshToken, profile, done) => {
            // console.log(profile);
            db.Users.findOne({
                googleid: profile.id

                // email: "this little tacos e-mail",
                // name:  "this little tacos name",
                // img: "this little tacos profile photo"
            }).then((user) => {
                // console.log("user was saved to database")
                if (user) {
                    done(null, user)
                }else{
                    db.Users.create({
                        googleid: profile.id,
                        email: profile.emails[0].value,
                        img: profile.photos[0].value,
                        name: profile.displayName
                    }).then((user) => {
                        done(null, user)
                    })
                }
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
    // console.log(user)
    done(null, user.googleid);
});

passport.deserializeUser((id, done) => {
    db.Users.findOne({googleid: id}).then((user) => {
        // console.log(user)
        done(null, user);
    });
});

module.exports = passport;