const router = require("express").Router();

// Matches with the /saved
router.get("/", (req, res) => {
    res.json({
        ok: "Hello sir thank you!",
        tyler1: "what even is a <div> bro?",
        tyler2: "Show me the code bro",
        tyler3: ""
        
    })
})



module.exports = router;