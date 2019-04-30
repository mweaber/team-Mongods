const router = require("express").Router();
const EbayRoutes = require("../api/eBay");

router.use("/shop", EbayRoutes);

module.exports = router;