const express = require('express');
const { listarMinhasPerguntas } = require('../controllers/perguntasController');
const routes = express.Router()
const perguntaController = require('../controllers/perguntasController')
const Pergunta = require('../models/Perguntas')
const Resposta = require('../models/Resposta')

routes.get('/', perguntaController.listarPerguntas)

routes.get('/pergunta/:id', perguntaController.listarUmaPergunta)

routes.get('/minhasperguntas', perguntaController.listarMinhasPerguntas)

routes.get('/perguntar', perguntaController.retornarFormulario)

routes.post('/salvarperguntas',perguntaController.enviarFormularioPergunta)

routes.post('/responder', perguntaController.enviarFormularioResposta)

module.exports = routes;