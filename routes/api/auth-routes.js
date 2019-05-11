const router = require('express').Router();
const passport = require('passport');
const redirectRoute = process.env.NODE_ENV === 'production' ? '/' : process.env.REACT_ROUTE
const db = require('../../models');

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

router.get('/test', checkAuth, (req, res) => {
  res.json(req.user);
});

router.post("/register", function (req, res) {
  db.User.findOneAndUpdate({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }).then(function () {
    res.redirect(307, "/api/signin")
  }).catch(function (err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.clearCookie("process.env.COOKIE_NAME").redirect(redirectRoute);
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get("/getuser", function (req, res) {
  if (req.user) {
    res.json({ user: req.user })
  }
  else {
    res.status(401).json({ err: "not working" })
  }
})

router.get('/google/redirect', passport.authenticate('google'),
  (req, res) => {
    console.log("Auth path hit")
    res.redirect(redirectRoute);
  });

router.get('/test/what', function (req, res) {
  console.log(req.user)
  if (req.user) {
    res.json({ user: true })
  } else {
    res.json({ user: false })
  }
})

module.exports = router;