const campos = document.querySelectorAll(
  ".container-form input, .container-form textarea"
);
const boton = document.querySelector("#button");
const mensaje = document.querySelector(".mensaje");

let span1 = document.getElementById("m1");
let span2 = document.getElementById("m2");
let span3 = document.getElementById("m3");
let span4 = document.getElementById("m4");
let icon = `<i class="fas fa-asterisk"></i>`;
let arregloFlags = [];

let v;

const caracteresInvalidosNombre = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "@",
  "#",
  "(",
  ")",
  "*",
  "_",
  "-",
];
const caracteresEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
const valoresCelular = /^[\+]?[0-9]+?[\s-]?[0-9]+[\s-]?[0-9]+$/;

// COMIENZA LA FUNCION DE VALIDACION
const validarCaracteres = () => {
  //=============VALIDACION DEL CAMPO NOMBRE===================
  campos[0].addEventListener("input", () => {
    let campo1 = campos[0].value;
    campo1 = campo1.trim();
    let valorF = "";
    for (valor of caracteresInvalidosNombre) {
      let posicion = campo1.indexOf(valor);
      if (posicion != -1) {
        valorF = valorF + valor;
        span1.innerHTML = `${icon}El campo nombre no puede tener este valor ${valorF}`;
        span1.style.display = "block";
        arregloFlags[0] = false;
      }
    }
    if (valorF.length == 0 && campo1.length >= 3) {
      arregloFlags[0] = true;
      span1.style.display = "none";
    } else if (campo1.length <= 2) {
      arregloFlags[0] = false;
      span1.innerHTML = `${icon}El campo nombre debe tener al menos 3 caracteres`;
      span1.style.display = "block";
    }
    botonEnviar();
  });
  //==============================================================================

  //=============VALIDACION DEL CAMPO CORREO===================
  campos[1].addEventListener("input", () => {
    let campo2 = campos[1].value;
    campo2 = campo2.trim();
    let validacion = campo2.match(caracteresEmail);
    if (validacion !== null) {
      arregloFlags[1] = true;
      // console.log("correcto");
      span2.style.display = "none";
    } else {
      // console.log("mal",campo2);
      span2.innerHTML = `${icon}Por favor ingresa un correo con el formato correcto`;
      span2.style.display = "block";
      arregloFlags[1] = false;
    }
    botonEnviar();
  });
  //==============================================================================

  //=============VALIDACION DEL CAMPO TELEFONO/CELULAR===================
  campos[2].addEventListener("input", () => {
    let campo3 = campos[2].value;
    campo3 = campo3.trim();
    // console.log(campo3, campo3.length);

    let v_Telefono_celular = campo3.match(valoresCelular);
    if (v_Telefono_celular === null) {
      // console.log(v_Telefono_celular);
      span3.innerHTML = `${icon}Por favor ingresa un número de telefono/celular valido`;
      span3.style.display = "block";
      arregloFlags[2] = false;
    } else {
      span3.style.display = "none";
      arregloFlags[2] = true;
    }
    botonEnviar();
  });
  //==============================================================================

  //=============CAMPO MENSAJE===================

  campos[3].addEventListener("input", () => {
    let campoM = campos[3].value.length;
    span4.innerHTML = `${campoM}/300 Carácteres`;
    if (campoM >= 4) {
      arregloFlags[3] = true;
    } else {
      arregloFlags[3] = false;
    }
    botonEnviar();
    // if (arregloFlags[0] === true) {
    //     console.log('flag 1 activa')
    // } else {
    //     console.log('flag desactivada')
    // }
  });
};

const botonEnviar = () => {
  if (
    arregloFlags[0] === true &&
    arregloFlags[1] === true &&
    arregloFlags[2] === true &&
    arregloFlags[3] === true
  ) {
    // console.log('flag activada', arregloFlags)
    mensaje.style.display = "none";
    boton.removeAttribute("disabled");
    boton.classList.remove("deactivated");
    boton.classList.add("activated");
    // console.log(boton)
  } else {
    console.log("flag desactivada", arregloFlags);
    mensaje.style.display = "block";
    boton.setAttribute("disabled", "");
    boton.classList.remove("activated");
    boton.classList.add("deactivated");
    // console.log(boton.attributes)
  }
};
validarCaracteres();
