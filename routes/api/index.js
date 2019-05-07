const router = require("express").Router();
const eBayRoutes = require("../api/eBay");
const comicRoutes= require("../api/comic");

router.use("/shop", eBayRoutes);
router.use("/characters", comicRoutes);

module.exports = router;