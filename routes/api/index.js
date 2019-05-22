const router = require("express").Router();
const eBayRoutes = require("./eBay");
const authRoutes = require("./auth-routes");
const statueRoutes = require("./statues")
const preorderRoutes = require("./po")

router.use("/shop", eBayRoutes);
router.use("/statueinput", statueRoutes)
router.use("/auth", authRoutes );
router.use("/preorder", preorderRoutes)

module.exports = router;