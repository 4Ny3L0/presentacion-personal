const campos = document.querySelectorAll(
  ".container-form input, .container-form textarea"
);
const boton = document.querySelector("#button");
const mensaje = document.querySelector(".mensaje");
let span2 = document.createElement("span");
let span3 = document.createElement("span");
let span4 = document.createElement("span");

span2.classList.add("mensaje");
span3.classList.add("mensaje");
span4.classList.add("mensaje");
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

const contarCaracteres = () => {
  //=============VALIDACION DEL CAMPO NOMBRE===================
  campos[0].addEventListener("keyup", () => {
    let campo1 = campos[0].value;
    campo1 = campo1.trim();
    let valorF = "";
    for (valor of caracteresInvalidosNombre) {
      let posicion = campo1.indexOf(valor);
      if (posicion != -1) {
        valorF = valorF + valor;
        span2.innerHTML = `El campo nombre no puede tener este valor ${valorF}`;
        mensaje.appendChild(span2);
        span2.style.display = "block";
        // = `El campo nombre no puede tener este valor ${valorF}`;
      }
    }
    if (valorF.length == 0) {
      span2.style.display = "none";
    }
  });
  //=====================================

  //=============VALIDACION DEL CAMPO CORREO===================
  campos[1].addEventListener("keyup", () => {
    let campo2 = campos[1].value;
    campo2 = campo2.trim();
    let validacion = campo2.match(caracteresEmail);
    if (validacion !== null) {
      console.log("correcto");
      span3.style.display = "none";
    } else {
      console.log("mal");
      span3.innerHTML = `El correo no es valido`;
      mensaje.appendChild(span3);
      span3.style.display = "block";
    }
  });
  //================================

  //=============VALIDACION DEL CAMPO TELEFONO/CELULAR===================
  campos[2].addEventListener("keyup", () => {
    let campo3 = campos[2].value;
    campo3=campo3.trim();
    console.log(campo3, campo3.length);

    let v_Telefono_celular=campo3.match(valoresCelular);
    if(v_Telefono_celular===null){
      console.log(v_Telefono_celular)
      span4.innerHTML ="Por favor ingresa un número de telefono/celular valido";
        mensaje.appendChild(span4);
        span4.style.display = "block";
      }
      else{
        span4.style.display = "none";
      }
    }); 
    // for (numero of valoresCelular) {
    //   let posicionC = campo3.indexOf(numero);
    //   console.log(numero,campos[2].value,posicionC);
    //   if (posicionC == -1 && campo3.length>=6) {
    //     contador = contador + numero;
    //     span4.innerHTML =
    //       "Por favor ingresa un número de telefono/celular valido";
    //     mensaje.appendChild(span4);
    //     span4.style.display = "block";
    //   }
    // }
    // if (contador.length) {
    //   // console.log(contador.length);
    // }
  //================================

  //     let campo3 = campos[2].value;
  //     let campo4 = campos[3].value;
  //     //  console.log('campo1: ',campo1)
  //     //  console.log('campo2: ',campo2)
  //     //  console.log('campo3: ',campo3)
  //     //  console.log('campo4: ',campo4)
  //     //   if (
  //     //     campo1.length >= 5 &&
  //     //     campo2.length >= 10 &&
  //     //     campo3.length > 0 &&
  //     //     campo4.length >= 1
  //     //   ) {
  //     //       mensaje.style.display='none';
  //     //     console.log("todo bien");
  //     //   } else {
  //     //     mensaje.style.display='block';
  //     //     console.log("todo mal");
  //     //   }
  //   });
  // }
};
contarCaracteres();
