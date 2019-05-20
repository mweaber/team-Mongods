const router = require("express").Router();
const dbStatues = require("../../models/statues");


function checkAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({
            Error: "Unauthorized"
        });
    }
}

// Matches with the /saved

router.post("/statueAdd", checkAuth, (req, res) => {
  
    console.log(req.body)
  

    const newStatues = new dbStatues(req.body.newStatues);
    newStatues.userID = req.user._id;
    newStatues.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

})

router.get("/search/:query", (req, res) => {
    statues.findItemsByKeywords(req.params.query)
        .then(result => {
            const useable = result[0];
            const statuesResult = useable.searchResult[0].item;
            res.json(statuesResult)
        })
        .catch(err => res.json(err))
})


module.exports = router;