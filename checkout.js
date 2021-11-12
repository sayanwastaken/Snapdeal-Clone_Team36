document.querySelector("button").addEventListener("click", gotopayment);
var addressStore=JSON.parse(localStorage.getItem("addressList")) || [];
var allemail=JSON.parse(localStorage.getItem("Loguser")) || [];
console.log(allemail);
document.querySelector("h4").innerHTML= allemail;
var imgbox=document.createElement("div");
var img1=document.createElement("img");
img1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuRgmqRR4U-fUyGU1Xf-Y1IEnInqqVtxm9w&usqp=CAU");
imgbox.append(img1);
var h5=document.createElement("h5");
h5.innerHTML= `1.LOGIN`;
document.getElementById("nav2").append(imgbox,h5);
function gotopayment(){ 
//bellow codes are for validation//
    var pin=document.getElementById("pin").value;
    if(pin.length!=6){
       alert("Please enter a valid pincode.");
        document.getElementById("pin").style.borderColor="red";
        return false;
    }else if(pin.length==6){
          document.getElementById("pin").style.borderColor="grey";
    }
    var name=document.getElementById("name").value;
    if(name==""){
       alert("Please enter your full name.");
        document.getElementById("name").style.borderColor="red";
        return false;
    }else{
          document.getElementById("name").style.borderColor="grey";
    }
    var add=document.getElementById("add").value;
    if(add==""){
       alert("Please enter your address.");
        document.getElementById("add").style.borderColor="red";
        return false;
    }else{
          document.getElementById("add").style.borderColor="grey";
    }
    var locality=document.getElementById("locality").value;
    if(locality==""){
       alert("Please enter your near by address.");
        document.getElementById("locality").style.borderColor="red";
        return false;
    }else{
          document.getElementById("locality").style.borderColor="grey";
    }
    var city=document.getElementById("city").value;
    if(city==""){
       alert("Please enter your city.");
        document.getElementById("city").style.borderColor="red";
        return false;
    }else{
          document.getElementById("city").style.borderColor="grey";
    }
    var state=document.getElementById("state").value;
    if(state==""){
       alert("Please enter your state.");
        document.getElementById("state").style.borderColor="red";
        return false;
    }else{
          document.getElementById("state").style.borderColor="grey";
    }
    var mobile=document.getElementById("mobile").value;
    if(mobile.length!=14){
       alert("Please enter your 10 digit mobile number.");
        document.getElementById("mobile").style.borderColor="red";
        return false;
    }else{
          document.getElementById("mobile").style.borderColor="grey";
    }
    var altermob=document.getElementById("altermob").value;
    if(altermob.length!=14){
       alert("Please enter an alternate 10 digit mobile number.");
        document.getElementById("altermob").style.borderColor="red";
        return false;
    }else{
          document.getElementById("altermob").style.borderColor="grey";
    }
    var selected=document.getElementById("selected").value;
    var list={
         // pin:pin,
          //name:name,
         // add:add,
         // locality:locality,
         // city:city,
         // state:state,
          mobile:mobile,
          //altermob:altermob,
          //selected:selected,
    };
    var arr=["home","office"];
    var flag=0; 
    for(var i=0;i<arr.length;i++){
       if(arr[i]==selected){  
         flag=1;
         break;
       }
    }
   
       if(flag==1){
            addressStore.push(list);
             localStorage.setItem("addressList",JSON.stringify(addressStore));
           alert("Your address successfully saved.");
           document.getElementById("selected").style.borderColor="grey";
       }else{
           alert("Please select address type.");
           document.getElementById("selected").style.borderColor="red";
           return false;
       }
}
document.getElementById("mobile").value="+91 ";
document.getElementById("altermob").value="+91 ";
// for next page review order make payment//
document.getElementById("reviewnav").addEventListener("click", reviewOrder);
function reviewOrder(){
      window.location.href="review.html";
}
document.getElementById("paymentnav").addEventListener("click", paymentpage);
function paymentpage(){
      window.location.href="payment.html"
}

