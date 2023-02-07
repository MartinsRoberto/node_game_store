const router = require("express").Router();

const gamesRouter = require('./gameRoutes')
const userRouter = require("./userRoutes")

router.use("/", userRouter)
router.use("/", gamesRouter)


module.exports = router;
