const router = require("express").Router();
const eBayRoutes = require("./eBay");
const authRoutes = require("./auth-routes");

router.use("/shop", eBayRoutes);
router.use("/auth", authRoutes );

module.exports = router;