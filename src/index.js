import validator from './validator.js';

console.log(validator);

var getData = function (){
    var nombre = document.getElementById("nombres").value;
    
    var creditCardNumber = document.getElementById("creditCardNumber").value;
    console.log(nombre,creditCardNumber);
  
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("creditCardNumber",creditCardNumber); 
    
    window.location.href = 'indexP4.html'} 