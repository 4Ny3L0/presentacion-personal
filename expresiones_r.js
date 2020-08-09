let cadena="61417992";
const caracteresEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
const validacionCelular_telefono= /^[\+]?[0-9]+?[\s-]?[0-9]+[\s-]?[0-9]+$/
let resultado=cadena.match(validacionCelular_telefono);
if(resultado!==null){
    console.log('correcto',resultado)
}else{
    console.log('mal',resultado)
}