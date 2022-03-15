const secret = require('../config/secret')
const jwt = require('express-jwt')

module.exports = jwt({
    secret: secret.key,
    algorithms: ['HS256']
})