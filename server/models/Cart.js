
const mongoose = require('mongoose')

const { Schema } = mongoose

const cartSchema = new Schema(
  {
    user_id: {
      type: String,
      require: true
    },
    game_id: {
      type: Array,
      require: true
    }
  }
)

const Cart = mongoose.model("Carts", cartSchema)

module.exports = Cart