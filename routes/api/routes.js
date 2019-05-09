const router = require("express").Router();

// Matches with the /saved
router.get("/", (req, res) => {
    res.json({
        ok: "You have hit the basic get / route",   
    })
})

router.post("/ebayAdd", (req, res) => {
    db.Ebay.findOneAndUpdate({
        title: title,
        location: location,
        image: image
    }).then(() => {
        res.redirect(307, "")
    }).catch((err) => {
        console.log(err);
        res.json(err)
        console.log("some things happened, ebayAdd route was hit, but did not work")
    })
})


app.post("/api/register", function(req, res) {
    db.User.create({
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