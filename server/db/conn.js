// const mongoose = require('mongoose')

// async function main() {
//   try {
//     mongoose.set('strictQuery', true)

//     await mongoose.connect('mongodb://127.0.0.1:27017/game_store');

//     console.log('Database is online')
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// module.exports = main

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('game_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize