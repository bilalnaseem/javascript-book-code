



// function checkForLastName(){
//     if(document.getElementById("lastNameField").value.length === 0){
//         alert("enter your last name please!")
//         return false;
//     }
// }


//  function checkForLastName() {
//  if (document.getElementById("lastNameField").value.length === 0) {
//  alert("Please enter your last name");
//  document.getElementById("lastNameField").focus();
//  return false;
//  }
//  }









//  function checkForLastName() {
//  var targetField = document.getElementById("lastNameField");
//  if (targetField.value.length === 0) {
//  alert("Please enter your last name");
//  targetField.focus();
//  return false;
//  }
//  }








//  function checkForLastName() {
//  var targetField = document.getElementById("lastNameField");
//  if (targetField.value.length === 0) {
//  alert("Please enter your last name");
//  targetField.focus();
//  targetField.style.background = "yellow";
//  return false;
//  }
// targetField.style.background = "white";
//  }



// function checkForSelection(){
//   if( document.getElementById("states").selectedIndex === 0){
//       alert("please kuch to uthao!")

//   }
//     return false;
// }






//  function checkForSelection(selecID) {
//  var target = document.getElementById(selecID);
//  if (target.selectedIndex === 0) {
//  alert("Please select a state.");
//  return false;
//  }
//  }




//  function validateRadios(ename) {
//  var radios = document.getElementsByName(ename);
//  for (var i = 0; i < radios.length; i++) {
//  if (radios[i].checked) {
//      alert("good");
//  return true;
//  }
//  }
//  alert("Please check one.");
//  return false;
//  }







// function validateZIP(){
//     var numChars = document.getElementById("zip").value.length;
//     if(numChars < 5){
//         alert("5 digit daalo!")
//         return false;
//     }
// }










// function validateZIP(){
//     var numChars = document.getElementById("zip").value.length;
//     if(numChars < 5){
//         alert("5 digit daalo!")
//         return false;
//     }

//    for(i = 0; i<=4; i++){
//        var thisChar = parseInt(numChars[i]);
//        if(isNaN(thisChar)){
//            alert("plaesae enter only numbers")
//            return false;
//        }
//    }

//}


















//  function validateEmail() {
//  var eEntered = document.getElementById("email").value;
//  if (eEntered.indexOf(" ") !== -1) {
//  alert("No spaces allowed in address");
//  return false;
//  }
//  }




//  function validateEmail() {
//  var addressIsLegal = true;
//  var eEntered = document.getElementById("email").value;
//  if (eEntered.indexOf(" ") !== -1) {
//  addressIsLegal = false;
//  }
//  if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//  addressIsLegal = false;
//  }
//  if (addressIsLegal === false) {
//  alert("Please correct email address");
//  return false;
//  }
//  }




//  function validateEmail() {
//  var addressIsLegal = true;
//  var eEntered = document.getElementById("email").value;
//  if (eEntered.indexOf(" ") !== -1) {
//  addressIsLegal = false;
//  }
//  if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//  addressIsLegal = false;
//  }
//  if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
// eEntered.indexOf(".") > eEntered.length - 3) {
//  addressIsLegal = false;
//  }
//  if (addressIsLegal === false) {
//  alert("Please correct email address");
//  return false;
//  }
//  }




    // try{
    //     var greeting = "hello world"
    //     aler(greeting);
    // }
    // catch(err){
    //     alert(err);
    // }

//  function checkPassword() {
//  try {
//  var pass = document.getElementById("f1").value;
//  if (pass.length < 8) {
//  throw "Please enter at least 8 characters.";
//  }
//  if (pass.indexOf(" ") !== -1) {
//  throw "No spaces in the password, please.";
//  }
//   var numberSomewhere = false;
//  for (var i = 0; i < pass.length; i++) {
//  if (isNaN(pass(i, i+1)) === false) {
//  numberSomewhere = true;
//  break;
//  }
//  }
//  if (numberSomewhere === false) {
//  throw "Include at least 1 number.";
//  }
//  }
//  catch(err) {
//  alert(err);
//  }
//  }























// var sayHello = "hi";


// //  var b1 = document.getElementById("button1");
// // b1.onclick() = sayhello
// document.getElementById("button1").onclick = sayHello;




 function sayHello() {
 alert("Hi there.");
 }