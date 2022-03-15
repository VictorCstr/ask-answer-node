const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        titulo: Joi.string().required().max(20)  ,
        descricao: Joi.string().required()
    })

})