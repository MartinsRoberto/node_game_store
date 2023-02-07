const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    }
  }
)

const User = mongoose.model("Users", userSchema)

module.exports = User