//import validator from './validator.js';

//console.log(validator);

function getData() {

    var nombre = document.getElementById("nombres").value;
    var creditCardNumber1= document.getElementById("creditCardNumber").value;

    // console.log(getData)
    console.log(nombre, creditCardNumber1);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("creditCardNumber1", creditCardNumber1);

    const aNumeroTarjeta= Array.from(creditCardNumber1);
    console.log(aNumeroTarjeta)


    //  window.location.href = 'indexP4.html' 
  }

  const boton = document.getElementById("BotonTarjeta");
  boton.addEventListener("click", getData); 