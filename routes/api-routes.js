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



module.exports = router;
