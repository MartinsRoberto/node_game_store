
const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    lastname: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
  }
)

const User = mongoose.model("Users", userSchema)

module.exports = User