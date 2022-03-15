const {validate, Joi}  = require('express-validation')

module.exports = validate({
    body: Joi.object({
        user_name: Joi.string().required().max(20)  ,
        user_email: Joi.string().required().email(),
        user_pass: Joi.string().required()
    })

})