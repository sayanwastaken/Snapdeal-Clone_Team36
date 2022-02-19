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

var signName= JSON.parse(localStorage.getItem("userName"))||[];


function bat(){
  // window.location.href="signin.html"
console.log(signName)
document.getElementById("signbtn").innerText=""

document.getElementById("signbtn").innerText=signName

  window.location.href="signin.html"
  
}


//  manish JS Start


var data = [

  {

      type: "Bhawna collection loard shiv",
      image_url:
          "https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg",
      priceP: "Rs.1499",
      price: "Rs. 129",
      Offer: "91% Off",

  },

  {

      type: "Veirdo 100 Percent Cotton Green",
      image_url:
          "https://n2.sdlcdn.com/imgs/j/o/r/large/Veirdo-100-Percent-Cotton-Green-SDL302182620-1-1ba35.jpeg",
      priceP: "Rs.1199",
      price: "Rs. 319",
      Offer: "73% Off",

  },

  {

      type: "Callmate H-40With USB BULB",
      image_url:
          "https://n4.sdlcdn.com/imgs/j/x/8/large/Callmate-H-40-With-USB-SDL257998546-1-23845.jpeg",
      priceP: "Rs.2499",
      price: "Rs. 449",
      Offer: "80% Off",

  },

  {

      type: "Maxbell USB Rechargeable ",
      image_url:
          "https://n4.sdlcdn.com/imgs/i/z/e/large/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg",
      priceP: "Rs.899",
      price: "Rs. 169",
      Offer: "81% Off",

  },

  {

      type: "Bentag Vegetable & Fruit Clever",
      image_url:
          "https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg",
      priceP: "Rs.410",
      price: "Rs. 145",
      Offer: "65% Off",

  },



  {

      type: "SKS Assorted Steel Nunchaku Other",
      image_url:
          "https://n1h2.sdlcdn.com/imgs/i/g/0/large/SKS-Assorted-Steel-Nunchaku-Other-SDL137574679-1-31598.webp",
      priceP: "Rs.499",
      price: "Rs. 239",
      Offer: "52% Off",

  },

  {

      type: "shuangyou Stainless Steel Vegetable",
      image_url:
          "https://n1h2.sdlcdn.com/imgs/i/4/7/large/Shuangyou-Stainless-Steel-Vegetable-Scissor-SDL097045228-1-0997c.webp",
      priceP: "Rs.399",
      price: "Rs. 219",
      Offer: "45% Off",

  },

  {

      type: "Apratim Black Etnic Footwear",
      image_url:
          "https://n1h2.sdlcdn.com/imgs/j/j/w/large/Apratim-Black-Ethnic-Footwear-SDL927799462-1-80268.webp",
      priceP: "Rs.999",
      price: "Rs. 240",
      Offer: "76% Off",

  },

  {

      type: "Viser Look Digital Multicolour",
      image_url:
          "https://n1h2.sdlcdn.com/imgs/j/s/v/large/Viser-Look-Digital-Multicolour-Military-SDL669272522-1-afd36.webp",
      priceP: "Rs.1499",
      price: "Rs. 279",
      Offer: "81% Off",

  },

  {

      type: "Raj Black Ethnic Footwear",
      image_url:
          "https://n1h2.sdlcdn.com/imgs/j/s/h/large/Raj-Black-Ethnic-Footwear-SDL745449801-1-14e34.webp",
      priceP: "Rs.999",
      price: "Rs. 393",
      Offer: "61% Off",

  }
];




var body = document.querySelector("body");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");

body.append(mainDiv)

localStorage.setItem("AllData", JSON.stringify(data));

document.getElementById("btn").addEventListener("click", myfun);
var p4 = document.getElementById("product_4");
p4.style.display = "none"


function myfun() {
  p4.style.display = "grid";
  var product = JSON.parse(localStorage.getItem("AllData"))
  console.log(product)

  product.map(function (item,index) {
      displayItems(item.name, item.type, item.image_url, item.price, item.priceP, item.Offer,index)

  });

  function displayItems(name, type, image_url, price, priceP, Offer,) {
      
      var imageDiv = document.createElement("div");

      
      var img = document.createElement("img");
      img.setAttribute("src", image_url)
      img.style.width = "90%"
       

      var h5 = document.createElement("i");
      h5.setAttribute("class", "fas fa-star")


      var p1 = document.createElement("i");
      p1.setAttribute("class", "fas fa-star")



      var p2 = document.createElement("i");
      p2.setAttribute("class", "fas fa-star")



      var p3 = document.createElement("i");
      p3.setAttribute("class", "fas fa-star")



      var p4 = document.createElement("i");
      p4.setAttribute("class", "fas fa-star")
      p4.style.color = "#e9e9e9";

      var Div = document.createElement("div");
      Div.setAttribute("id", "Div")
       

      var h2 = document.createElement("h2");
      h2.textContent = priceP;



      var h3 = document.createElement("h3");
      h3.textContent = price;

      var btn = document.createElement("button");
      btn.textContent = Offer
      btn.style.backgroundColor = "#333333";
      btn.style.fontSize = "10px";
      btn.style.fontWeight = "400px";
      btn.style.lineHeight = "10px";
      btn.style.backgroundColor  = "rgb(153, 153, 153)"

      var h4 = document.createElement("h4");
      h4.textContent = type;






      Div.append(h2, h3, btn)


      imageDiv.append(img, h4, h5, p1, p2, p3, p4, Div)
     // mainDiv.append(imageDiv)
      // alert("payment")
      var parent = document.getElementById("product_4")
      var referenceNode = document.getElementById("empty")
      
      parent.insertBefore(imageDiv, referenceNode);
      
 
      
  }
}


/---------------------------load more---------------------------------/


function checkemail(){
   var email = document.querySelector("input").value;
   var ptag = document. getElementById("valid");
   console.log(email);
   if(email == ''){
       ptag.textContent = "Please enter a valid email address"
   }else{
       ptag.textContent = "Subscribed"
   }
   console.log(ptag)
}


document.getElementById("under").addEventListener("mouseenter", enter);

function enter(){
   document.getElementById("under").style.textDecoration = "underline"
}



/---------------------pincode hide--------------------------/



