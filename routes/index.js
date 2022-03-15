const express = require('express');
const routes = express.Router()
const perguntaController = require('../controllers/perguntasController')
const askValidation = require('../validations/askValidation')
const answerValidation = require('../validations/answerValidation')

const authController = require('../controllers/authController')
const auth = require('../middlewares/auth')
const loginValidation = require('../validations/loginValidation')

const usuariosController = require('../controllers/usuariosController')
const userValidation = require('../validations/userValidation')

routes.get('/', perguntaController.listarPerguntas)
routes.get('/perguntas/:id', perguntaController.listarUmaPergunta)
routes.get('/perguntas/:userid', perguntaController.listarMinhasPerguntas)
routes.post('/perguntas', answerValidation ,perguntaController.enviarFormularioResposta)


routes.get('/perguntar', perguntaController.retornarFormulario)
routes.post('/perguntar', askValidation ,perguntaController.enviarFormularioPergunta)

routes.get('/login', perguntaController.retornarPaginalogin)
routes.post('/login', loginValidation , authController.login )

routes.get('/cadastrar', perguntaController.retornarPaginaCadastro)
routes.post('/cadastrar', userValidation ,usuariosController.criarUsuario)




module.exports = routes;