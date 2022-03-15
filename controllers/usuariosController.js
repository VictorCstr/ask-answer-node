const {Usuarios} = require('../models/index')
const bcrypt = require('bcrypt')

const usuariosController = {
    criarUsuario: async (req,res) => {
    const{user_name, user_email , user_pass} = req.body
    const senhaCriptografada = await bcrypt.hash(user_pass, 10)
    
    Usuarios.create({
        user_name,
        user_email,
        user_pass: senhaCriptografada
    }) .then( () => {
        alert('Usuario cadastrado!')
        return res.status(201).redirect('/login')
    })
}
}

module.exports = usuariosController