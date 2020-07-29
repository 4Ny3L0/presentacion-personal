require('./config/config.js');
//Paquetes requeridos
const express = require("express");
const bodyP = require("body-parser");
const hbs = require("hbs");

//Declaracion de servidor
const app = express();
app.use(bodyP.urlencoded({ extended: false }))

// parse application/json
app.use(bodyP.json())

//estableciendo uso de carpeta public y setiando hbs
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

//estableciendo carpetas de los parciales
hbs.registerPartials(__dirname + '/views/partials/');

//Rutas
app.use(require('./routes/index.js'))

app.post('/contacto', (req, res) => {
    let body = req.body;
    console.log(body)
    res.render('contacto')
})
app.use((req, res, next) => {
        res.status(404).render('error')
    })
    //configuracion de puertos
app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Servidor ejecutandose en el puerto ${process.env.PORT}`);
});