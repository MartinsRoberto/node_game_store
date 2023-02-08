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
  },

  getAll: async (req, res) => {
    try {
      const response = await UserModel.find()

      res.status(200).json(response)
    }
    catch (err) {
      console.log(err)
    }
  },

  get: async (req, res) => {
    try {
      const { id } = req.params.id

      const user = await UserModel.findById(id)

      if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado" })
        return
      }

      res.send(200).json(user)
    }
    catch (err) {
      console.log(err)
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params.id

      const user = await UserModel.findByIdAndDelete(id)

      if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado" })
        return
      }

      res.send(200).json({ msg: "Usuário deletado com sucesso" })
    }
    catch (err) {
      console.log(err)
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id

      const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
      }

      if (req.body.password != req.body.confirmpassword) {
        res.status(409).json({ msg: "As senhas são diferentes" })
        return
      }

      const checkOldEmail = await UserModel.findById(id)

      if(req.body.email != checkOldEmail.email){
        
        const checkEmail = await UserModel.findOne({ email: req.body.email })

        if (checkEmail) {
          res.status(409).json({ msg: "Email já cadastrado" })
          return
        }
  
      }
      
      const response = await UserModel.findByIdAndUpdate(id, user)

      res.status(201).json({ response, msg: "Usuário atualizado com sucesso" })

    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = userController