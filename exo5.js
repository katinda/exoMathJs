


document.getElementById("run").addEventListener("click",function(){
     var nbr = document.getElementById("number");

        if(Math.round(nbr)==nbr){
            var i=1
            var nbr = document.getElementById("number");
            while(i<nbr-1){
                nbr= nbr+nbr*i;
                i=i+1;
            }
            console.log(nbr);
        }
        else{
            return undefined;
        }
    
    


});