
var Addition = document.getElementById("addition");
var Substraction = document.getElementById("substraction");
var Multiplication = document.getElementById("multiplication");
var Division = document.getElementById("division");



Addition.addEventListener("click",function(){
    var opOne =  document.getElementById("op-one").value ;
    var opTwo = document.getElementById("op-two").value ;
    


    var somme = parseInt(opOne) + parseInt(opTwo);
    console.log(somme);

});


/*------------------------------*/
Substraction.addEventListener("click",function(){
    var opOne =  document.getElementById("op-one").value ;
    var opTwo = document.getElementById("op-two").value ;
   

    var somme = parseInt(opOne) - parseInt(opTwo);
    console.log(somme);
});



/*------------------------------*/
Multiplication.addEventListener("click",function(){
        var opOne =  document.getElementById("op-one").value ;
        var opTwo = document.getElementById("op-two").value ;
      
        var somme = parseInt(opOne) * parseInt(opTwo);
        console.log(somme);
});



/*------------------------------*/
Division.addEventListener("click",function(){
    var opOne =  document.getElementById("op-one").value ;
    var opTwo = document.getElementById("op-two").value ;
 

     var somme =  parseInt(opOne) / parseInt(opTwo);
    console.log(somme);
});





