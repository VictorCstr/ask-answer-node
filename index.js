const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/perguntar', (req,res) => {
    res.render('perguntar')
})

app.post('/salvarperguntas', (req,res) => {
    res.send('Questionamento recebido!')
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080!');
})