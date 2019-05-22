const router = require("express").Router();
const dbStatues = require("../../models/statues");

router.get("/recentStatues", (req, res) => {
    dbStatues.find({_id: { $in: [
        mongoose.dbStatues.ObjectId('4ed3ede8844f0f351100000c'),
    ]}
})
    .then(function(dbStatuesShow) {
        res.json(dbStatuesShow)
    })
    .catch(function(err) {
        res.json(err)
    })
})

module.exports = router;