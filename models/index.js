const Perguntas = require("./Perguntas");
const Resposta = require("./Resposta");
const Usuarios = require('./Usuarios');

Perguntas.belongsTo(Usuarios, {
    foreignKey: 'pergunta_userid'
})

Usuarios.hasMany(Perguntas, {
    foreignKey: 'pergunta_userid'
})

Resposta.belongsTo(Usuarios, {
    foreignKey: 'resposta_userid'
})

Usuarios.hasMany(Resposta, {
    foreignKey: 'resposta_userid'
})

Resposta.belongsTo(Perguntas, {
    foreignKey: 'pergunta_id'
})

Perguntas.hasMany(Resposta, {
    foreignKey: 'pergunta_id'
})






module.exports = { Perguntas, Resposta , Usuarios }  ; 