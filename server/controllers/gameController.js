const GameModel = require('../models/Game')

const gameController = {
  create: async (req, res) => {
    try{
      const game = {
        name: req.body.name,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        price: req.body.price,
        image: req.body.image,
        devices: req.body.image
      }

      const response = await GameModel.create(game)

      console.log(response)
      res.status(201).json({ response, msg: "Jogo adicionado com sucesso" });
    }
    catch(err){
      console.log(err)
    }
  }
}

module.exports = gameController