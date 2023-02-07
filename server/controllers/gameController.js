const GameModel = require('../models/Game')

const gameController = {
  create: async (req, res) => {
    try {
      const game = {
        name: req.body.name,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        price: req.body.price,
        image: req.body.image,
        devices: req.body.devices
      }

      console.log(game.devices)
      const searchName = await GameModel.findOne({ name: game.name })

      if (searchName) {
        res.status(409).json({ msg: "Este jogo já foi criado" })
        return
      }

      const response = await GameModel.create(game)

      res.status(201).json({ response, msg: "Jogo adicionado com sucesso" });
    }
    catch (err) {
      console.log(err)
    }
  },

  getAll: async (req, res) => {
    try {
      const response = await GameModel.find()

      res.status(200).json(response)

    }
    catch (err) {
      console.log(err)
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id

      const game = await GameModel.findById(id)

      if (!game) {
        res.status(404).json({ msg: "Jogo não encontrada" });
        return;
      }

      res.status(200).json(game)

    }
    catch (err) {
      console.log(err)
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id

      const game = await GameModel.findById(id)

      if (!game) {
        res.status(404).json({ msg: "Jogo não encontrado" })
      }

      const deletedGame = await GameModel.findByIdAndDelete(id)

      res.status(200).json({ deletedGame, msg: "Jogo deletado com sucesso" })

    }
    catch (err) {
      console.log(err)
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id

      const game = {
        name: req.body.name,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        price: req.body.price,
        image: req.body.image,
        devices: req.body.image
      }

      const checkName = await GameModel.findById(id)

      if (checkName.name != game.name) {
        const checkAllNames = await GameModel.findOne({ name: game.name })

        if (checkAllNames) {
          res.status(409).json({ msg: "Este jogo já foi criado" })
          return
        }
      }

      const updateGame = await GameModel.findByIdAndUpdate(id, game)

      if (!updateGame) {
        res.status(404).json({ msg: "Jogo não encontrado" })
        return
      }

      res.status(200).json({ updateGame, msg: "Jogo atualizada com sucesso" });
    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = gameController