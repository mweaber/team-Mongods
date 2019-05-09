const router = require('express').Router();
const db = require('../models/user');

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



//delete user --previous project-- -- up for mongo
// router.delete('/removeuser', checkAuth, (req, res) => {
//     db.User.destroy({
//             where: {
//                 id: req.user.id,
//             }
//         })
//         .then(result => res.json(result))
//         .catch(err => res.json(err));
// })


//add a med 

module.exports = router;
