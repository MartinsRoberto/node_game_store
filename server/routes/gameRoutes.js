const router = require('express').Router()

const gameController = require('../controllers/gameController')

router.route('/game').post((req, res) => gameController.create(req, res))
// router.post('/car/create', gameController.create)

module.exports = router