const router = require("express").Router();
const dbPO= require("../../models/preorders");


function checkAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({
            Error: "Unauthorized"
        });
    }
}


router.post("/newPreorder", checkAuth, (req, res) => {
    console.log(req.body)
    console.log("path hit")

    const newPO = new dbPO(req.body.newPO);
    newPO.userID = req.user._id;
    newPO.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

})

router.get("/recentPreorders", (req, res) => {
    dbPO.find()
    .sort({_id: -1})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;