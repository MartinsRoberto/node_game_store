const CartModel = require('../models/Cart')
const GameModel = require('../models/Game')

const cartController = {
  create: async (req, res) => {
    try {
      const userId = req.body.userId
      const gameId = req.body.gameId


      await CartModel.create({
        userId,
        gameId
      })

      res.status(201).json({ msg: "Adicionado ao carrinho com sucesso" });

    }
    catch (err) {
      console.log(err)
    }
  },

  get: async (req, res) => {
    try {
      console.log('1dfun')
      const userId = req.params.id

      const response = await CartModel.findAll({ where: { userId: userId }, raw: true })

      console.log('kkkkkkkk', response[0].gameId)

      res.status(201).json(response);

    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = cartController