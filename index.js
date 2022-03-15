const express = require('express');
const db = require('./database/db')
const routes = require('./routes/index')
const port = process.env.PORT || 8080

const app = express();
db.hasConection()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
    console.log('Servidor rodando na porta ' + port);
})