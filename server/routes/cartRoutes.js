const router = require('express').Router()

const cartController = require('../controllers/cartController')

router.route('/cart').post((req, res) => cartController.create(req, res))

router.route('/cart/:id').get((req, res) => cartController.get(req, res))
module.exports = router