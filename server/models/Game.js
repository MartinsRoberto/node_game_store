const { DataTypes } = require("sequelize")

const db = require("../db/conn")

const Games = db.define("Games", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  devices: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Games