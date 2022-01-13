var userArr = JSON.parse(localStorage.getItem("UserData1"));
var emailVal = document.querySelector("#email");
var pass = document.querySelector("#password");
var mailError = document.querySelector("#mailerror");
var passError = document.querySelector("#passerror");

function validEmail(email) {
  var flag = 1;
  for (let i = 0; i < emailVal.value.length; i++) {
    if (emailVal.value[i] == "@") {
      flag = 0;
      return false;
    }
  }
  if (flag == 1) {
    return true;
  }
}

document.querySelector("#btn-signIn").addEventListener("click", () => {
  if (emailVal.value == "" || validEmail() === true) {
    mailError.innerHTML =
      "please fill up your valid email id(Example:admin@example.com) ";
    email.style.border = "1px solid red";
  }
  if (validEmail() === false) {
    mailError.innerHTML = "";
    email.style.border = "1px solid grey";
  }
  if (pass.value == "") {
    passerror.innerHTML = "password can't be empty";
    pass.style.border = "1px solid red";
  }
  if (pass.value.length < 6) {
    passerror.innerHTML = "password must be of 6 digits or more";
    pass.style.border = "1px solid red";
  }
  var flag = 1;
  for (let i = 0; i < userArr.length; i++) {
    if (
      emailVal.value == userArr[i].emOrmobile &&
      pass.value == userArr[i].pass
    ) {
      flag = 0;
      // localStorage.setItem("Logname",JSON.stringify(userArr[i].name));
      console.log(userArr[i].name);
      localStorage.setItem("userName", JSON.stringify(userArr[i].name));
      localStorage.setItem("Loguser", JSON.stringify(emailVal.value));
      alert("Login successful!");
      window.location.href = "index.html";
      break;
    }
  }
  if (flag == 1) {
    alert("Login failed! user does not exist please try again");
  }
});

document.getElementById("btn-signUp").addEventListener("click", () => {
  window.location.href = "signup.html";
});
