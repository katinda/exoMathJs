
var Addition = document.getElementById("addition");
var Substraction = document.getElementById("substraction");
var Multiplication = document.getElementById("multiplication");
var Division = document.getElementById("division");
var operation = document.querySelector("actions") 




function addition(){
   
    Addition.addEventListener("click",function(){
        var opOne =  document.getElementById("op-one").value ;
        var opTwo = document.getElementById("op-two").value ;
        
    
    
        var somme = parseInt(opOne) + parseInt(opTwo);
        console.log(somme);
    
    });
}  

/*------------------------------*/
function substraction(){
    Substraction.addEventListener("click",function(){
        var opOne =  document.getElementById("op-one").value ;
        var opTwo = document.getElementById("op-two").value ;
       
    
        var somme = parseInt(opOne) - parseInt(opTwo);
        console.log(somme);
    });
   
}

/*------------------------------*/
function multiplication(){
    Multiplication.addEventListener("click",function(){
        var opOne =  document.getElementById("op-one").value ;
        var opTwo = document.getElementById("op-two").value ;
      
        var somme = parseInt(opOne) * parseInt(opTwo);
        console.log(somme);
});


}

/*------------------------------*/
function division(){
    Division.addEventListener("click",function(){
        var opOne =  document.getElementById("op-one").value ;
        var opTwo = document.getElementById("op-two").value ;
     
    
         var somme =  parseInt(opOne) / parseInt(opTwo);
        console.log(somme);
    });
};



switch(operation){
    case "addition":
        console.log(addition());
    break;
    case "substraction":
        console.log(substraction());
    break; 
    case "multiplication":
        console.log(multiplication());
    break;     
    case "division":
        console.log(division());
    break;
    default:
        console.log("IL Y A RIEN !");
    break;
}