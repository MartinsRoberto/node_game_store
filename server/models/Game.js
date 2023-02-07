const mongoose = require('mongoose')

const { Schema } = mongoose

const gameSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    releaseYear: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    devices: {
      type: Array,
      require: true
    }
  }
)

const Game = mongoose.model("Games", gameSchema)

module.exports = Game