const express = require('express');
const db = require('./database/db')
const Pergunta = require('./models/Perguntas')


const app = express();
db.hasConection()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res) => {
    Pergunta.findAll().then(perguntas => {
        res.render('index' , {perguntas})
    })
    
})

app.get('/perguntar', (req,res) => {
    res.render('perguntar')
})

app.post('/salvarperguntas', (req,res) => {
    var titulo = req.body.titulo
    var descricao = req.body.duvidas
    Pergunta.create({
        titulo,
        descricao
    }) .then( () => {
        res.status(201).redirect("/")
    })
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080!');
})