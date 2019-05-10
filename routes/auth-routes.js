const router = require('express').Router();
const passport = require('passport');

router.get("/logout", function(req, res) {
    req.logout();
    res.clearCookie("process.env.COOKIE_NAME").redirect("/");
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']

}), (req, res) => {res.send("test")
console.log("the route on line 9 was hit!!!! for real.")
}
);

router.get('/google/redirect', 
    passport.authenticate('google'), 
    (req, res) => {
    console.log("Auth path hit")
    res.redirect('/');
    
});

module.exports = router;