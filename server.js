const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials/');

app.use(require('./routes/index.js'))

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Servidor ejecutandose en el puerto 3000");
});
