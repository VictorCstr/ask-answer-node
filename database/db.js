const Sequelize = require('sequelize')

let db = {}
    try { 
        db = new Sequelize('heroku_4358d5626c7879d', 'bcae950ff9be8b', '5bc92172',{
        dialect: "mysql",
        host:"us-cdbr-east-05.cleardb.net",
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