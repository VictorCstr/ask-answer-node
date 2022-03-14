const express = require('express');
const db = require('./database/db')
const app = express();
const Pergunta = require('./models/Perguntas')

db.hasConection()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/perguntar', (req,res) => {
    res.render('perguntar')
})

app.post('/salvarperguntas', (req,res) => {
    var titulo = req.body.titulo
    var duvida = req.body.duvidas
    res.send('Questionamento recebido! Titulo: ' + titulo + ' e a Descrição:' + duvida)
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080!');
})