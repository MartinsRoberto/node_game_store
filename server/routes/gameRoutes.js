const router = require('express').Router()

const gameController = require('../controllers/gameController')

router.route('/game').post((req, res) => gameController.create(req, res))

router.route('/game').get((req, res) => gameController.getAll(req, res))

router.route('/game/:id').get((req, res) => gameController.get(req, res))

router.route('/game/:id').delete((req, res) => gameController.delete(req, res))

module.exports = router