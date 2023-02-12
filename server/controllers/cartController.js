const CartModel = require('../models/Cart')

const cartController = {
  create: async (req, res) => {
    try {
      const user_id = req.body.user_id
      const game_id = req.body.game_id

      const checkIfExistUserCart = await CartModel.findOne({ user_id: user_id })

      if (!checkIfExistUserCart) {
        await CartModel.create({
          user_id,
          game_id
        })
      }
      else {
        const gamesCart = checkIfExistUserCart.game_id
        gamesCart.push(game_id)

        const a = await CartModel.findOneAndUpdate({ user_id }, { game_id: gamesCart })
        console.log(a)
      }

      res.status(201).json({ msg: "Adicionado ao carrinho com sucesso" });

    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = cartController