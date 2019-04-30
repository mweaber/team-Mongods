const router = require("express").Router();
const eBayRoutes = require("../api/eBay");

router.use("/shop", eBayRoutes);

module.exports = router;