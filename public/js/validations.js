const campos = document.querySelectorAll(
  ".container-form input, .container-form textarea"
);
const boton = document.querySelector("#button");
const mensaje = document.querySelector(".mensaje");
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
  "-"
];
const caracteresEmail=["@","."];
const contarCaracteres = () => {
  for (campo of campos) {
    campo.addEventListener("keyup", () => {
      //=============VALIDACION DEL CAMPO NOMBRE===================
      let campo1 = campos[0].value;
      campo1 = campo1.trim();
      let valorF = "";
      for (valor of caracteresInvalidosNombre) {
        let posicion = campo1.indexOf(valor);
        if (posicion != -1) {
          valorF = valorF + valor;
            mensaje.innerHTML = `El campo nombre no puede tener este valor ${valorF}`;
          } 
          
        }
        if (valorF == 0) {
          mensaje.innerHTML = `Todos los campos son requeridos`;
        }
      //=====================================
      
      
      
      let campo2 = campos[1].value;
      let campo3 = campos[2].value;
      let campo4 = campos[3].value;
      //  console.log('campo1: ',campo1)
      //  console.log('campo2: ',campo2)
      //  console.log('campo3: ',campo3)
      //  console.log('campo4: ',campo4)
      //   if (
      //     campo1.length >= 5 &&
      //     campo2.length >= 10 &&
      //     campo3.length > 0 &&
      //     campo4.length >= 1
      //   ) {
      //       mensaje.style.display='none';
      //     console.log("todo bien");
      //   } else {
      //     mensaje.style.display='block';
      //     console.log("todo mal");
      //   }
    });
  }
};
contarCaracteres();
