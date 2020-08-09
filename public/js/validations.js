const campos = document.querySelectorAll(
  ".container-form input, .container-form textarea"
);
const boton = document.querySelector("#button");
const mensaje = document.querySelector(".mensaje");
let span1 = document.getElementById('m1');
let span2 = document.getElementById('m2');
let span3 = document.getElementById('m3');
let span4 = document.getElementById('m4');
let icon = `<i class="fas fa-asterisk"></i>`;

// span2.classList.add("mensaje");
// span3.classList.add("mensaje");
// span4.classList.add("mensaje");
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

// COMIENZA LA FUNCION
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
        span1.innerHTML = `${icon}El campo nombre no puede tener este valor ${valorF}`;
        // mensaje.appendChild(span2);
        span1.style.display = "block";
      }
    }
    if (valorF.length == 0) {
      span1.style.display = "none";
    }
  });
//==============================================================================

  //=============VALIDACION DEL CAMPO CORREO===================
  campos[1].addEventListener("keyup", () => {
    let campo2 = campos[1].value;
    campo2 = campo2.trim();
    let validacion = campo2.match(caracteresEmail);
    if (validacion !== null) {
      // console.log("correcto");
      span2.style.display = "none";
    } else {
      // console.log("mal",campo2);
      span2.innerHTML = `${icon}El correo no es valido`;
      mensaje.appendChild(span3);
      span2.style.display = "block";
    }
  });
//==============================================================================

  //=============VALIDACION DEL CAMPO TELEFONO/CELULAR===================
  campos[2].addEventListener("keyup", () => {
    let campo3 = campos[2].value;
    campo3=campo3.trim();
    // console.log(campo3, campo3.length);

    let v_Telefono_celular=campo3.match(valoresCelular);
    if(v_Telefono_celular===null){
      console.log(v_Telefono_celular)
      span3.innerHTML =`${icon}Por favor ingresa un número de telefono/celular valido`;
        span3.style.display = "block";
      }
      else{
        span3.style.display = "none";
      }
    });
//==============================================================================

//=============CAMPO Mensaje===================

campos[3].addEventListener('keyup',()=>{
  let campoM= campos[3].value.length;
  span4.innerHTML = `${campoM}/300 Carácteres`;
})


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
