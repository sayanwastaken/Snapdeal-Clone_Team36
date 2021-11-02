document.querySelector("button").addEventListener("click",signup);
var userArr= JSON.parse(localStorage.getItem("UserData1")) || [];
function signup(){
    var name=document.getElementById("name").value;
    var emOrmobile=document.getElementById("emOrmobile").value;
    var pass=document.getElementById("pass").value;
    var repass=document.getElementById("repass").value;
    if(repass==pass){
       var usreList={
           name:name,
           emOrmobile:emOrmobile,
           pass:pass,
        };
       userArr.push(usreList);
       localStorage.setItem("UserData1",JSON.stringify(userArr));
       window.location.href="SignIn.html";
       alert("Password matched");
    }
    else{
        alert("Password did not match, please try again.")
    }
}