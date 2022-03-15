const Sequelize = require('sequelize');
const db = require('../database/db')

const Usuarios = db.define(
    'usuarios',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_email:{
          type: Sequelize.STRING,
          allowNull: false,
        }  ,
        user_pass:{
            type: Sequelize.STRING,
            allowNull: false,
        } 
    }
)

Usuarios.sync({force:false}).then( () => {})

module.exports = Usuarios;