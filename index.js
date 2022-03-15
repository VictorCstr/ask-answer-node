const express = require('express');
const db = require('./database/db')
const routes = require('./routes/index')
const handleError = require('./middlewares/handleError')

const app = express();
db.hasConection()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(routes);
app.use(handleError)

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080!');
})