

const validator = {

    isvalid: (creditCardNumber1) => {
      
      const aNumeroTarjeta = Array.from(creditCardNumber1);
    

      const aInvertido = aNumeroTarjeta.reverse();
      
      
     aInvertido.forEach (function (element, index) {
      let nueva = index + 1;
      if (nueva % 2 == 0) { element = element * 2 }
  
      if (element > 9) { element = element - 9 }
  
      aInvertido[index] = element;
  
      
  
      });
  
    
    var suma = 0;
  
    for (var i = 0; i < aInvertido.length; i++) {
      suma = suma + parseInt(aInvertido[i]);
  
    }
  
   
  
    var division = suma % 10
    
  
    if (division === 0) { return true } else { return false }
  },

  
    maskify: (aNumeroTarjeta)=> {
     return "#".repeat(aNumeroTarjeta.length - 4 )+ aNumeroTarjeta.slice(-4)
  
    }
  };
    export default validator;
