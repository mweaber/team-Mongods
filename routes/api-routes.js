const router = require('express').Router();
const db = require('../models');

//middleware for protecting routes
function checkAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({
            Error: "Unauthorized"
        });
    }
}

//test route: check auth

router.get('/test', checkAuth, (req, res) => {
    res.json(req.user);
})

router.post("/api/register", function(req, res) {
    db.User.findOneAndUpdate({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }).then(function() {
        res.redirect(307, "/api/signin")
    }).catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
    });
});





module.exports = router;
