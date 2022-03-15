const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        resposta: Joi.string().required()
    })

})