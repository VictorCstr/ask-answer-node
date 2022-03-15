const { Perguntas , Resposta } = require('../models/index')

const perguntaController = {
    listarPerguntas : (req,res) => {
         Perguntas.findAll({order:[
            ['id', 'DESC']
        ]}).then(perguntas => {
            res.render('index' , {perguntas})
        }) 
    },

    listarUmaPergunta: (req,res) => {
        let id = req.params.id
         Perguntas.findOne({
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
        Perguntas.findAll({order:[
            ['id', 'DESC']
        ]}).then(perguntas => {
            res.render('minhasperguntas' , {perguntas})
        }) 
    },

    retornarFormulario: (req,res) => {
        res.render('perguntar')
    },
    
    retornarPaginalogin: (req,res) => {
        res.render('login')
    },

    retornarPaginaCadastro: (req,res) => {
        res.render('cadastro')
    },

    enviarFormularioPergunta: (req,res) => {
        let titulo = req.body.titulo
        let descricao = req.body.duvidas
        Perguntas.create({
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
            res.status(201).redirect('/perguntas/' + pergunta_id)
        })
    }
}

module.exports = perguntaController;