const { DataTypes } = require("sequelize")

const db = require("../db/conn")

const Cart = db.define("Cart", {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Cart