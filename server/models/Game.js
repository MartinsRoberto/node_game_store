const mongoose = require('mongoose')

const { Schema } = mongoose

const gameSchema = new Schema(
  {
    name: {
      type: STRING,
      require: true
    },
    description: {
      type: STRING,
      require: true
    },
    releaseDate: {
      type: DATA,
      require: true,
    },
    price: {
      type: Number,
      required: true
    }
  }
)