const router = require("express").Router();
const ebayAPI = require("ebay-node-api");
const dbEbay = require("../../models/ebay");

let ebay = new ebayAPI({
    clientID: process.env.EBAY_API,
    limit: 6
});

// Matches with the /saved

router.post("/ebayAdd", (req, res) => {
    console.log(req.body)
    
    const newEbay = new dbEbay(req.body.newEbay);
    newEbay.userID = req.user._id;
    newEbay.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

})

router.get("/search/:query", (req,res) => {
    ebay.findItemsByKeywords(req.params.query)
        .then(result => {
            const useable = result[0];
            const ebayResult = useable.searchResult[0].item;
            res.json(ebayResult)
        })
        .catch(err => res.json(err))
})


module.exports = router;