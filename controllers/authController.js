const { Usuarios } = require ('../models')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')

const authController = {
    async login(req,res) {
        const {user_email, user_pass} = req.body
        const usuario = await Usuarios.findOne({
            where: {
                user_email
            }
        })

        if(!usuario){res.status(400).json('Usuário não está cadastrado!')}

        if(!bcrypt.compareSync(senha, usuario.senha)){
            res.status(400).json('Senha invalida!')
        }

        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome
        },
        secret.key
        )
        return res.json(token).redirect('/')
    }
}

module.exports = authController;