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

module.exports = router;