const router = require('express').Router()

const userController = require('../controllers/userController')

router.route('/user').post((req, res) => userController.create(req, res))

router.route('/user/auth').post((req, res) => userController.auth(req, res))

router.route('/user/:id').get((req, res) => userController.get(req, res))

router.route('/user/:id').delete((req, res) => userController.delete(req, res))

router.route('/user/:id').put((req, res) => userController.update(req, res))

module.exports = router