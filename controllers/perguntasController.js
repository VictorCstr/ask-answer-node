const Pergunta = require('../models/Perguntas')
const Resposta = require('../models/Resposta')

const perguntaController = {
    listarPerguntas : (req,res) => {
         Pergunta.findAll({order:[
            ['id', 'DESC']
        ]}).then(perguntas => {
            res.render('index' , {perguntas})
        }) 
    },

    listarUmaPergunta: (req,res) => {
        let id = req.params.id
         Pergunta.findOne({
            where: {id}
        }).then( pergunta => {
            if(pergunta != undefined){
              Resposta.findAll({
                    where: {pergunta_id: id}
                }).then(respostas =>{
                    res.render('pergunta' , {pergunta , respostas})
                }) 
            }else{
                res.redirect('/')
            } })
    },

    listarMinhasPerguntas: (req,res) => {
        Pergunta.findAll({order:[
            ['id', 'DESC']
        ]}).then(perguntas => {
            res.render('minhasperguntas' , {perguntas})
        }) 
    },

    retornarFormulario: (req,res) => {
        res.render('perguntar')
    },

    enviarFormularioPergunta: (req,res) => {
        let titulo = req.body.titulo
        let descricao = req.body.duvidas
        Pergunta.create({
            titulo,
            descricao
        }) .then( () => {
            res.status(201).redirect("/")
        })
    },
    enviarFormularioResposta: (req,res) => {
        let pergunta_id = req.body.pergunta;
        let resposta = req.body.resposta;
        Resposta.create({
            resposta,
            pergunta_id
        }) .then( () => {
            res.status(201).redirect('/pergunta/' + pergunta_id)
        })
    }
}

module.exports = perguntaController;