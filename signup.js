document.querySelector("#btn-signup").addEventListener("click", signup);
var userArr = JSON.parse(localStorage.getItem("UserData1")) || [];

function signup() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("name").style.borderColor = "red";
    alert("Please enter your name");
    return false;
  } else {
    document.getElementById("name").style.borderColor = "grey";
  }
  var emOrmobile = document.getElementById("emOrmobile").value;
  var flag = 0;
  for (var i = 0; i < emOrmobile.length; i++) {
    if (emOrmobile[i] == "@") {
      document.getElementById("emOrmobile").style.borderColor = "grey";
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    document.getElementById("emOrmobile").style.borderColor = "red";
    alert("Please enter a valid email");
    return false;
  }
  var pass = document.getElementById("pass").value;
  var repass = document.getElementById("repass").value;
  if (pass.length < 6) {
    document.getElementById("pass").style.borderColor = "red";
    alert("Password must be at least 6 charecters.");
    return false;
  } else {
    document.getElementById("pass").style.borderColor = "grey";
  }
  if (repass == pass) {
    var userList = {
      name: name,
      emOrmobile: emOrmobile,
      pass: pass,
    };
    userArr.push(userList);
    localStorage.setItem("UserData1", JSON.stringify(userArr));
    window.location.href = "signin.html";
  } else {
    document.getElementById("repass").style.borderColor = "red";
    alert("Re-enter password must be same.");
  }
}
document.getElementById("btn-signin").addEventListener("click", signIn);
function signIn() {
  window.location.href = "signin.html";
}
//****mouseenter and mouseleave effect****//
document
  .querySelector("#btn-signup")
  .addEventListener("mouseenter", enterButton);
function enterButton() {
  document.querySelector("#btn-signup").style.backgroundColor = "#a71111";
}
document
  .querySelector("#btn-signup")
  .addEventListener("mouseleave", leaveButton);
function leaveButton() {
  document.querySelector("#btn-signup").style.backgroundColor = "#EB0000";
}
document
  .getElementById("btn-signin")
  .addEventListener("mouseenter", enterButton2);
function enterButton2() {
  document.getElementById("btn-signin").style.backgroundColor = "#a71111";
}
document
  .getElementById("btn-signin")
  .addEventListener("mouseleave", leaveButton2);
function leaveButton2() {
  document.getElementById("btn-signin").style.backgroundColor = "#EB0000";
}
