const UserModel = require('../models/User')

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      }

      console.log('user', user)
      if (req.body.password != req.body.confirmPassword) {
        res.status(409).json({ msg: "As senhas são diferentes" })
        return
      }

      const checkEmail = await UserModel.findOne({ where: { email: req.body.email}, raw: true })

      if (checkEmail) {
        res.status(409).json({ msg: "Email já cadastrado" })
        return
      }

      const response = await UserModel.create(user)

      console.log('create', response)

      res.status(201).json(response.id)
    }
    catch (err) {
      console.log(err)
    }
  },

  auth: async (req, res) => {
    try {

      const email = req.body.email
      const password = req.body.password

      const response = await UserModel.findOne({ where: { email: email}, raw: true })

      console.log('----------------------------------')
      console.log('auth', response)

      if (password == response.password && response) {
        res.status(201).json(response.id)
      }
      else {
        res.json({ msg: 'Email ou senha incorretos' })
      }
    }
    catch (err) {
      console.log(err)
    }
  },

  get: async (req, res) => {
    try {
      const { id } = req.params.id

      const user = await UserModel.findOne({ where: { id: id }, raw: true })

      if (user) {
        res.status(200).json(user)
        return
      }
      else {
        res.json({ msg: 'Erro ao buscar usuário' })
      }
    }
    catch (err) {
      console.log(err)
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params.id

      const user = await UserModel.destroy({ where: { id: id } })

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
        confirmPassword: req.body.confirmPassword
      }

      if (req.body.password != req.body.confirmPassword) {
        res.status(409).json({ msg: "As senhas são diferentes" })
        return
      }

      const checkOldEmail = await UserModel.findOne({ where: { id: id }, raw: true })

      if (req.body.email != checkOldEmail.email) {

        const checkEmail = await UserModel.findOne({ where: { email: req.body.email }, raw: true })

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