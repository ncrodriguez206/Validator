import validator from './validator.js';

console.log(validator);

function alias(){

  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  validator.isvalid (creditCardNumber1)
  validator.maskify (creditCardNumber1)
  //  window.location.href = 'indexP4.html' 

};

  


const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", alias); 