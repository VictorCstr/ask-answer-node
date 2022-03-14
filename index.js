const express = require('express');
const db = require('./database/db')
const Pergunta = require('./models/Perguntas')
const Resposta = require('./models/Resposta')


const app = express();
db.hasConection()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res) => {
    Pergunta.findAll({order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render('index' , {perguntas})
    }) 
})

app.get('/pergunta/:id' , (req,res) => {
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
        }
    })
})

app.get('/minhasperguntas', (req,res) => {
    Pergunta.findAll({order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render('minhasperguntas' , {perguntas})
    }) 
})

app.get('/perguntar', (req,res) => {
    res.render('perguntar')
})

app.post('/salvarperguntas', (req,res) => {
    let titulo = req.body.titulo
    let descricao = req.body.duvidas
    Pergunta.create({
        titulo,
        descricao
    }) .then( () => {
        res.status(201).redirect("/")
    })
})

app.post('/responder', (req,res) => {
    let pergunta_id = req.body.pergunta;
    let resposta = req.body.resposta;
    Resposta.create({
        resposta,
        pergunta_id
    }) .then( () => {
        res.status(201).redirect('/pergunta/' + pergunta_id)
    })
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080!');
})