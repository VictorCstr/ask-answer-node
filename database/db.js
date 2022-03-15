const Sequelize = require('sequelize')

let db = {}


    try { 
        db = new Sequelize('projeto_perguntasv2', 'root', 'mysql',{
        dialect: "mysql",
        host:"localhost",
        port:3306
})} catch(error){
    console.log(error)
}   

    async function hasConection () {
    try{
        await db.authenticate()
        console.log('Sucesso na conexão com o banco de dados!')
    } catch (error){
        console.error("Houve um erro!")
    }
}

Object.assign(db, {hasConection} )


module.exports = db;