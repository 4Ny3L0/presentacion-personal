const express = require("express");
const app = express();
const { enviarMail } = require('../mail')

//pagina de inicio
app.get("/", (req, res) => {
    res.render("inicio");
});

//pagina de inicio
app.get("/inicio", (req, res) => {
    res.render("inicio");
});

//pagina de conocimientos
app.get("/conocimientos", (req, res) => {
    res.render("conocimientos");
});

//pagina de curriculum
app.get("/curriculum", (req, res) => {
    res.render("curriculum");
});

//pagina de contacto
app.get("/contacto", (req, res) => {
    res.render("contacto");
});

//pagina de mensaje enviado

// app.get('/enviado', (req, res) => {

// });

app.post('/contacto', (req, res) => {
    let body = req.body;
    // receptor.text = body;
    // console.log(body)
    enviarMail(body)
    res.render('enviado')
})
module.exports = app;