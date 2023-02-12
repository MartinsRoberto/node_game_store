const router = require("express").Router();

const gamesRouter = require('./gameRoutes')
const userRouter = require("./userRoutes")
const cartRoutes = require("./cartRoutes")

router.use("/", userRouter)
router.use("/", gamesRouter)
router.use("/", cartRoutes)

module.exports = router;
