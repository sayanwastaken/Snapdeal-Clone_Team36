document.getElementById("cart").addEventListener("click", goTocart);

function goTocart() {
  window.location = "cart.html";
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

var imagearr=["https://media.istockphoto.com/photos/happy-indian-business-man-remote-teacher-customer-support-manager-picture-id1309489753?b=1&k=20&m=1309489753&s=170667a&w=0&h=H55Nh-amHuyBXU2dzeinpBuv3IOr1-Jfe-UJ0t92eD4=",
"https://media.istockphoto.com/photos/businessman-touching-virtual-dartboard-with-arrow-business-objective-picture-id1306669539?b=1&k=20&m=1306669539&s=170667a&w=0&h=xmSUeNrt2_Tz6AWOHMSL7CkJfeuCJen7JzKrid-fH8s=",
"https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
]
var imagestore=imagearr.map(function(item){
    return item
})
var count=0;
document.getElementsByClassName("imageBottomText").addEventListener("click",leftbtn)

function leftbtn(){
    console.log("here")
document.getElementById("imagecontainer").innerHTML=imagestore[count]
count++
}

