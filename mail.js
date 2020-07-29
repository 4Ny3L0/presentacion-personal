require('./config/config.js');
const nodemailer = require("nodemailer");
// console.log(ps, euser)
const emisor = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: euser,
        pass: ps
    }
});

const receptor = {
    from: euser,
    to: 'a10.gutierrez507@gmail.com',
    subject: 'Formulario de contactenos pagina web 410Tech',
    text: 'funcionara?'
};



emisor.sendMail(receptor, (err, info) => {
    if (err) {
        return console.log('error al intentar enviar el mail', err)
    }
    console.log(info.response)
})