const Sequelize = require('sequelize');
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
        }  
    }
)

Perguntas.sync({force:false}).then( () => {})

module.exports = Perguntas;