const router = require("express").Router();

// Matches with the /saved
router.get("/", (req, res) => {
    res.json({
        ok: "What even is a route, bro?",   
    })
})



module.exports = router;