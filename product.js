document.getElementById("cart").addEventListener("click", goTocart);

function goTocart() {
  window.location = "Cart.html";
}

document.getElementById("scndDivIMG").addEventListener("click", reload);

function reload() {
  reload = location.reload();
}

document.getElementById("SubmitBtn").addEventListener("click", pincodeFun);

function pincodeFun() {
  // var pinlen="123456"
  //   console.log("Here", "Pin code ");
  var submitText = document.getElementById("SubmitBtn").textContent;
  console.log(submitText)
  if (submitText == "Change Pincode") {
    //   document.getElementById("SubmitBtn").addEventListener("click", submitFun);
    submitFun();
  } else {
    var pincode = document.getElementById("inputPin").value;
    if (pincode.length < 6||pincode.length > 6) {
      document.getElementById("pintext").innerHTML = "Please enter a valid Pincode";
      console.log("invalid");
    } else {
      document.getElementById("inputPin").style.visibility = "hidden";
      document.getElementById("value").textContent = `pincode: ${pincode}`;
      document.getElementById("SubmitBtn").textContent = "Change Pincode";
    }
  }
}



function submitFun() {
  console.log("here");
  document.getElementById("inputPin").style.visibility = "visible";

  document.getElementById("value").textContent = "";
  document.getElementById("SubmitBtn").textContent="Submit"
}




var flag=0

function controller(x){
  flag  = flag + x
  slideShow(flag)
}

slideShow(flag)

function slideShow(num){
  var slides=document.getElementsByClassName("slide")

  if(num==slides.length){
    flag=0
    num=0
  }

  if(num<0){
    flag=slides.length-1
    num=slides.length-1
  }

 for(var y of slides){
    y.style.display="none"
 }

   slides[num].style.display="block"
}

var slideIndex = 0;
showSlides();

function showSlides() {
  
  var slides = document.getElementsByClassName("slide");
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var signName= JSON.parse(localStorage.getItem("Loguser"))||[];


function bat(){
  window.location.href="signin.html"
if( document.getElementsByClassName("signbtn").value==signName){
  document.getElementsByClassName("signbtn").textContent=""
  document.getElementsByClassName("signbtn").textContent=signName
}else{

}

  
console.log(signName)
  // localStorage.removeItem("Loguser")
  
  
}