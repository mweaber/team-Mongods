const router = require("express").Router();
const eBayController = require("../../controllers/eBayController");

// Matches with the /saved
router
    .route("/shop")
    .get(eBayController.findItemsByKeywords);

module.exports = router;