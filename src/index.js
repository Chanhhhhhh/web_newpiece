const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
// import { handlebars } from 'express-handlebars';

const app = express();
const port = 3000

// HTTP logger
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log(__dirname)

app.get('/newpiece', (req, res) => {
  res.render('home');
  // res.send(`<h1 style="color:red">Newpiece</h1>`)
})
// dinh nghia tuyen duong trang web
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})