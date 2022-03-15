const Sequelize = require('sequelize');
const db = require('../database/db')
const Usuarios = require('./Usuarios')
const Perguntas = require('../models/Perguntas')

const Respostas = db.define(
    'respostas',{
        resposta:{
          type: Sequelize.TEXT,
          allowNull: false,
        },
        pergunta_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Perguntas,
                Key: "id"
            }     
        },
        resposta_userid:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Usuarios,
                Key: "id"
            } } 
        }, 
        {
        tableName: "respostas"
        }
    );


module.exports = Respostas;