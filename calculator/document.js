let display = document.getElementById("input-box");
let button = document.querySelectorAll("button");

let buttonArray = Array.from(button);
let str = "";

buttonArray.forEach(btn=>{

btn.addEventListener("click", function(e){

      

    if(e.target.innerHTML  == "DEL"){
       
        str = str.substring(0,str.length-1);
        display.value = str;

    }else if(e.target.innerHTML == "AC"){
   
       str = "";
       display.value = str;

    }else if(e.target.innerHTML == "="){

         str = eval(display.value);
         display.value = str;

    }else{
        str += e.target.innerHTML;
        display.value = str;
    }

})
})

