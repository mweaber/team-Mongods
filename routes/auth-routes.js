const router = require('express').Router();
const passport = require('passport');
const redirectRoute = process.env.NODE_ENV === 'production' ? '/' : process.env.REACT_ROUTE

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
    res.status(401).json({ err: "you are the god of suck" })
  }
})

router.get('/google/redirect', passport.authenticate('google'),
  (req, res) => {
    console.log("Auth path hit")
    res.redirect(redirectRoute);
  });

  router.get('/test/what', function(req, res) {
    console.log(req.user)
    if (req.user) {
      res.json({ user: true})
    }else {
      res.json({ user:false })
    }
  })

module.exports = router;