const express = require('express');
const routes = express.Router()
const perguntaController = require('../controllers/perguntasController')

routes.get('/', perguntaController.listarPerguntas)
routes.get('/perguntas/:id', perguntaController.listarUmaPergunta)
routes.get('/perguntas/:userid', perguntaController.listarMinhasPerguntas)
routes.post('/perguntas', perguntaController.enviarFormularioResposta)


routes.get('/perguntar', perguntaController.retornarFormulario)
routes.post('/perguntar',perguntaController.enviarFormularioPergunta)

routes.get('/login', perguntaController.retornarPaginalogin)
routes.get('/cadastrar', perguntaController.retornarPaginaCadastro)




module.exports = routes;