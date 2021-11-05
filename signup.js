document.querySelector("button").addEventListener("click",signup);
var userArr= JSON.parse(localStorage.getItem("UserData1")) || [];
function signup(){
    var name=document.getElementById("name").value;
    if(name==""){
        document.getElementById("name").style.borderColor="red";
        alert("Please enter your name");
        return false;
    }
    else{
        document.getElementById("name").style.borderColor="grey";
    }
    var emOrmobile=document.getElementById("emOrmobile").value;
    if(emOrmobile==""){
        document.getElementById("emOrmobile").style.borderColor="red";
        alert("Please enter a valid email");
        return false;
    }
    else{
        document.getElementById("emOrmobile").style.borderColor="grey";
    }
    var pass=document.getElementById("pass").value;
    var repass=document.getElementById("repass").value;
    if(pass.length<6){
        document.getElementById("pass").style.borderColor="red";
        alert("Password must be atleast 6 charecters.");
        return false;
    }
    else{
        document.getElementById("pass").style.borderColor="grey";
    }
    if(repass==pass){
       var usreList={
           name:name,
           emOrmobile:emOrmobile,
           pass:pass,
        };
       userArr.push(usreList);
       localStorage.setItem("UserData1",JSON.stringify(userArr));
       window.location.href="signin.html";
    }
    else{
        document.getElementById("repass").style.borderColor="red";
        alert("Re-enter password must be same.")
    }
}
document.getElementById("btn").addEventListener("click",signin);
function signin(){
   window.location.href="signin.html";
}
//****mouseenter and mouseleave effect****//
document.querySelector("button").addEventListener("mouseenter",enterButton);
function enterButton(){
    document.querySelector("button").style.backgroundColor="#a71111";
}
document.querySelector("button").addEventListener("mouseleave",leaveButton);
function leaveButton(){
    document.querySelector("button").style.backgroundColor="#EB0000";
}
document.getElementById("btn").addEventListener("mouseenter",enterButton2);
function enterButton2(){
    document.getElementById("btn").style.backgroundColor="#a71111";
}
document.getElementById("btn").addEventListener("mouseleave",leaveButton2);
function leaveButton2(){
    document.getElementById("btn").style.backgroundColor="#EB0000";
}
