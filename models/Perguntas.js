const Sequelize = require('sequelize');
const Usuarios = require('./Usuarios')
const db = require('../database/db')

const Perguntas = db.define(
    'perguntas',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
          type: Sequelize.STRING,
          allowNull: false,
        }  ,
        descricao:{
            type: Sequelize.TEXT,
            allowNull: false,
        },
        pergunta_userid:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Usuarios,
                Key: "id"
            }     
        }
    }
)

Perguntas.sync({force:false}).then( () => {})

module.exports = Perguntas;