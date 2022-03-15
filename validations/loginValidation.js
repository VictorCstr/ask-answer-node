const {validate, Joi}  = require('express-validation')

module.exports = validate({
    body: Joi.object({
        user_email: Joi.string().required().email(),
        user_pass: Joi.string().required()
    })

})