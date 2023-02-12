const router = require('express').Router()

const cartController = require('../controllers/cartController')

router.route('/cart').post((req, res) => cartController.create(req, res))

module.exports = router