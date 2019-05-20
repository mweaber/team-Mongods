const router = require("express").Router();
const eBayRoutes = require("./eBay");
const authRoutes = require("./auth-routes");
const statueRoutes = require("./statues")

router.use("/shop", eBayRoutes);
router.use("/statueinput", statueRoutes)
router.use("/auth", authRoutes );

module.exports = router;