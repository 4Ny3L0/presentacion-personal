require('./config/config.js')
const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');

//Rutas
app.use(require('./routes/index.js'))

//configuracion de puertos
app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Servidor ejecutandose en el puerto ${process.env.PORT}`);
});