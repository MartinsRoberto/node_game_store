const UserModel = require('../models/User')

const userController = {
  create: async (req, res) => {
    try {

      const { name, lastname, email, password, confirmpassword } = req.body

      if (password != confirmpassword) {
        res.status(409).json({ msg: "As senhas são diferentes" })
        return
      }

      const checkEmail = await UserModel.findOne({ email: email })

      if (checkEmail) {
        res.status(409).json({ msg: "Email já cadastrado" })
        return
      }

      const user = { name, lastname, email, password }

      const response = await UserModel.create(user)

      res.status(201).json({ msg: "Usuário criado com sucesso" })
    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = userController