

/-----------------button check--------------------------------/ 

document.getElementById("check").addEventListener("click", pinCode);
 
 
 

 
var Div2 = document.getElementById("location")
Div2.style.display = "none";



function pinCode(){
     var  code = document.getElementById("Pin").value;
     var x_code = document.getElementById("pin1")
     var para = document.getElementById("cng");
     var h1 = document.createElement("h1");
     h1.textContent = "Item is available at"
     var y =  h1.textContent + " " + code  + ".";
      
     
     
     
      
     
    var Div1 = document.getElementById("checkAddress")
     if(code == '' || code.length <6 || code.length > 6){
        x_code.textContent = "Please enter a valid pin Code"
     }else if(  code.length == 6){
         Div2.style.display = "block";
         x_code.textContent = "";
         Div1.style.display = "none";
         para.textContent = y
         
         Div2.append("para.textContent")
         
          
         
     } 

   //  Div1.style.display = "block"
    }
     



 document.getElementById("chg").addEventListener("click", pin_Code);

 function pin_Code(){
     var Div1 = document.getElementById("checkAddress")
     var Div2 = document.getElementById("location")
     
      if(Div2.style.display == "none"){
       Div2.style.display = "block";
      }else{
          Div2.style.display = "none"
      }

      Div1.style.display = "block"

 }
