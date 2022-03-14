const Sequelize = require('sequelize');
const db = require('../database/db')
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
        }
    });

Respostas.sync({force:false}).then( () => {})

module.exports = Respostas;