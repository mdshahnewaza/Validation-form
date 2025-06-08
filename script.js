function validation() {
  console.log("hello");
  let userEl = document.querySelector("#user").value;
  let passEl = document.querySelector("#pass").value;
  let confpassEl = document.querySelector("#confpass").value;
  let emailEl = document.querySelector("#email").value;
  let mobEl = document.querySelector("#mob").value;

  if (userEl === "") {

    document.querySelector("#users").innerHTML = "** Please Enter username **";
    return false;
  }
  else {
    document.querySelector("#users").innerHTML = "";
  }

  // password input
  if (passEl === "") {
     document.querySelector('#passs').style.visibility = 'visible'
    document.querySelector("#passs").innerHTML = "** Please Enter Password **";
    return false;
  } else if (passEl.length < 8) {
    document.querySelector("#passs").innerHTML =
      "** Please Enter password of atleast 8 Character **";
      return false
  } else if (passEl.search(/[0-9]/) == -1) {
    document.querySelector("#passs").innerHTML =
      "** Please Enter password of atleast 1 Numbric Character **";
  } else if (passEl.search(/[a-z]/) == -1) {
    document.querySelector("#passs").innerHTML =
      "** Please Enter password of atleast 1 smallest latter Character **";
  } else if (passEl.search(/[A-Z]/) == -1) {
    document.querySelector("#passs").innerHTML =
      "** Please Enter password of atleast 1 Upper latter Character **";
  }
  else if (passEl.search(/[\!\@\#\$\%\&\*\(\)\?\>\<]/) == -1) {
    document.querySelector("#passs").innerHTML =
      "** Please Enter password of atleast 1 Symbool Character **";
  } 
   else {
    document.querySelector("#passs").innerHTML = "";
  }

  // Confirm Password input
  if (confpassEl === "") {
    document.querySelector("#confpasss").innerHTML =
      "** Please Enter C-password **";
    return false;
  }
  else if(confpassEl != passEl){
    document.querySelector("#confpasss").innerHTML =
      "** Please Enter Correct Password **";
  }
  else {
    document.querySelector("#confpasss").innerHTML = "";
   
  }

  // email input
  if (emailEl === "") {
    document.querySelector("#emails").innerHTML = "** Please Enter email **";
    return false;
  }
  else if(emailEl.indexOf('@')<=0){
    document.querySelector("#emails").innerHTML = "** invalid position of @ **";
  }
  else if(emailEl.charAt(emailEl.length - 4)!='.' && emailEl.charAt(emailEl.length- 3) != '.'){
    document.querySelector("#emails").innerHTML = "** invalid position of . **";
  }
   else {
    document.querySelector("#emails").innerHTML = "";
  }

  // mobile input
  if (mobEl === "") {
    document.querySelector("#mobs").innerHTML =
      "** Please Enter Mobile Number **";
  } else if (isNaN(mobEl)) {
    document.querySelector("#mobs").innerHTML =
      "** Please Enter only number **";
  } else if (mobEl.length < 10 || mobEl.length > 10) {
    document.querySelector("#mobs").innerHTML =
      "** Please Enter only 10-Digits **";
  }  else {
   
    document.querySelector("#mobs").innerHTML = "";
  }
}
