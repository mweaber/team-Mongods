const router = require("express").Router();
const ebayAPI = require("ebay-node-api");
const dbEbay = require("../../models/ebay");

let ebay = new ebayAPI({
    clientID: process.env.EBAY_API,
    limit: 10
});


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

router.post("/ebayAdd", checkAuth, (req, res) => {
    console.log(req.body)

    const newEbay = new dbEbay(req.body.newEbay);
    newEbay.userID = req.user._id;
    newEbay.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

})

router.get("/search/:query", (req, res) => {
    ebay.findItemsByKeywords(req.params.query)
        .then(result => {
            const useable = result[0];
            const ebayResult = useable.searchResult[0].item;
            res.json(ebayResult)
            // Will need to move to new API as images are too small.
            // console.log(useable);
            // console.log(useable.searchResult[0]);
            // console.log(ebayResult);
        })
        .catch(err => res.json(err))
})

router.get("/ebayItems", (req, res) => {
    dbEbay.find({userID: req.user._id})
    .then(function(dbEbaysShow) {
        res.json(dbEbaysShow)
    })
    .catch(function(err) {
        res.json(err)
    })
})


module.exports = router;