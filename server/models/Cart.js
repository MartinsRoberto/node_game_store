const { DataTypes } = require("sequelize")

const db = require("../db/conn")

const Cart = db.define("Cart", {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  game_id: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Cart