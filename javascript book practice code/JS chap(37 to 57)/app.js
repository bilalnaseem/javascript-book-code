


// function cook(ingrd1, ingrd2) {

//     console.log('bring cooked ' + ingrd1 + ' and ' + ingrd2);

// }

// cook('biscuits', 'nimco');
// cook('tea', 'paratha');
// cook('pepsi', 'lassi');




// function greeting (item1 , item2){
// 	alert('bring  '+  item1 + ' and ' +  item2)
// }

// greeting( 'kameez' , 'shalwar');




// function multiply(num1, num2, num3) {
//     var result = num1 * num2 * num3;
//     console.log(result);
// }

// multiply(2, 2, 2);
// multiply(2, 3, 4);
// multiply(6, 5, 4);





// function add(add1 , add2 , add3){
// 	var result = add1 + add2 + add3 ;
// 	alert(result);

// }


// add(2 , 2 , 3);
// add(3 , 3 , 3);


// var firstNum = +prompt('tell a number');
// var secondNum = +prompt('tell another number');
// var oper = prompt('tell operator');

// calculate(firstNum, secondNum, oper);

// function calculate(num1, num2, operator) {

//     if (operator === '+') {
//         console.log(num1 + num2);
//     }
//     else if (operator === '-') {
//         console.log(num1 - num2);
//     }
//     else if (operator === '*') {
//         console.log(num1 * num2);
//     }
//     else if (operator === '/') {
//         console.log(num1 / num2);
//     }
//     else if (operator === '%') {
//         console.log(num1 % num2);
//     }
//     else {
//         console.log('something went wrong.');
//     }

// }







// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// function substract(num1, num2) {
//     console.log(num1 - num2);
// }

// add(5,2);
// substract(5,2);







// function square(num) {
//     var square = num * num;
//     return square;

// }

// var firstSquare = square(2);
// var secondSquare = square(4);


// console.log(firstSquare + secondSquare);




// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }
//     else {
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//      return orderTot;
// }


// var orderTotal = calcTot(55);
// console.log(orderTotal);




//  userName = 'Ali';

// function greetUser() {
//     userName = 'haider';
//     //console.log(userName);

// }

// greetUser();
// console.log(userName);



// var carName = " Volvo";



// function myFunction() {
//      var carName = "baleno"

    

// }console.log(carName)




// var dayOfWk = "Sa" ;


// switch (dayOfWk) {

//     case "Sa":
//         alert("Whoopee");
//         break;
//     case "Su":
//         alert("Whoopee");
//         break;
//     case "Fr":
//         alert("TGIF!");
//         break;
//     case "We":
//     alert("result day");
//     break;
    
  
        

//     default:
//         alert("Shoot me now!");


// }




// for (var i = 0; i <= 3; i++) { 
//     console.log(i);
// }


// var i = 0;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }


// var i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i < 1);






// var i = 1;
// do{
//     console.log(i);

//    ++i 
// }while(i<=4)


// function a(message){            // commit  1
//     alert(message);
// }


//  function checkAddress(fieldId) {
//  if (document.getElementById(fieldId).value === "") {
//  alert("Email address required.");
//  }
// }


// function checkAddress(fieldId){
//     if(document.getElementById("email").value === " "){
//         alert("Email address required.");
//     }
// }


//  function fillCity() {
//  var cityName;
//  var zipEntered = document.getElementById("zip").value;
//  switch (zipEntered) {
//  case "60608" :
//  cityName = "Chicago";
//  break;
//  case "68114" :
// cityName = "Omaha";
//  break;
//  case "53212" :
//  cityName = "Milwaukee";
//  }
//  document.getElementById("city").value = cityName;
// }




// function fillCity(){
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch(zipEntered){
//         case "101":
//         cityName = "karachi";
//         break;
//         case "102":
//         cityName = "lahore"
//         break;
//         case "103":
//         cityName = "sukkur"
        
//    }
// document.getElementById("city").value = cityName;
// }


//  function expandLoris() {
//  var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//  document.getElementById("slowLoris").innerHTML = expandedParagraph;
//  }



//  function makeInvisible() {
// document.getElementById("ugly").className = "hidden";
//  }



// function makeInvisible(){
//     document.getElementById("ugly").className = "hidden";
// }


// function changePic(){
//     document.getElementById("before").src = "after.png";
// }




// function changePic(){
//     var pic = document.getElementById("before")
//     pic.src = "after.png"
// }


// var par = document.getElementsByTagName("p")


// var a = par[0].innerHTML;
// console.log(a)



// par[1].innerHTML = "my name uis bilal"





var p = document.getElementsByTagName('p')
console.log(p)
