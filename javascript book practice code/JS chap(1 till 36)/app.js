






// var a;
// a = 25;
// console.log(a);


// var Bilal = "you are a good boy";
// alert (Bilal);



// var weight=25;
// weight + 25;
// console.log(weight + 225);



//  var originalNum = 23;
//  var newNum = originalNum + 7;
//  console.log(newNum);


// var originalNum = "23";
//  var newNum = originalNum - 7;
//  alert (newNum);

//var a = 2+2;
//

// var num = 10;
// var popularNumber = num + 200;
// alert(popularNumber);


//  var num = 20 % 6;
//  alert(num);

// var totalCost = 1 + 3 * 4;
// alert(totalCost);

// var userName = "maa";
// alert("Thanks, " + userName + "!");

//  var question = "Your species?";
//  var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// ;
// var a = prompt("what is your name");
// if(a === "bilal"){
//     alert("saheh jawab");
// }



// var percentage = prompt("what is your percentage!");
// if (percentage === "78"){
//     alert("you have passed baby!")
// }

// else {
//     alert("you have failed");
// }


// var a = prompt("what is your name");
// if(a==="bilal"){
//     alert("right answer");

// }

// if(a!=="bilal"){
//     alert("wrong answer");
// }



// var a = prompt("what is your name");
// if(a==="bilal"){
//     alert("correct")
// }

// else if(a==="salman"){
//     alert("notgood nut closed one")
// }

// else{
//     alert("wrong answer")
// }

// var weight=prompt("your weight please!");
// var time=prompt("how many seconds!");

//  if (weight > 300 && time < 6) {
//  alert("Come to our tryout!");
//  }
//  else {
//  alert("Come to our cookout!");
//  }




// var SAT = prompt("what isn your SAT");
// var avg = 20;
// var GPA;
// var sport;

//  if (SAT > avg || GPA > 2.5 || sport === "football") {
//  alert("Welcome to Bubba State!");
//  }
//  else {
//  alert("Have you looked into appliance repair?");
//  }




// var city1 = "karahi";
// var city2 = "lahore";
// var city3 = "islamabad";
// alert("welcome to" +' '+ city2);


// var cities = ["karachi", "lahore","peshawar","pindi" ];
// alert("welcome to"+' '+ cities[3]);



// for(var i = 0; i < 10; i++ ){
// 	console.log(i);
// }


// var i = 0;
// for(i = 0; i<=50; i=i+5){
//     console.log(i);
// }





// var cityToCheck = prompt("Enter your city");
// var cleanestCities = ["Karachi", "Hyderabad", "Lahore" , "Quetta" ];
//  for(var i = 0;i <=2;i++)
// 	    if (cityToCheck === cleanestCities[i]) { 
// 	alert("It's one of the cleanest cities"); 
// 	 }  
	 


//      var cityToCheck = prompt("Enter your city");
// var cleanestCities = ["Karachi", "Hyderabad", "Lahore" , "Quetta" ];
//  var matchFound = false; 
 
// for (var i = 0; i < 4; i++) { 
// if (cityToCheck === cleanestCities[i]) { 
// 	 matchFound = true;
// alert("It's one of the cleanest cities"); 
// } 
// } 
//  if (matchFound === false) {
//  alert("It's not on the list");
//  } 



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];  
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
// var fullNames = []; 
// for (var i = 0; i < firstNames.length; i++) {   
// for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j]);
// }  
// }
// console.log(fullNames);


// var cityToCheck = prompt("enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "hyderabad", "lahore" , "quetta"];
// for(var i = 0; i <= 3; i++){
//     if(cityToCheck === cleanestCities[i]){
// alert("its one ofn the cleanest city");

//         }
// }




// var cityToCheck = prompt("enter your city");
// cityToCheck = cityToCheck.toUpperCase();
// var cleanestCities = ["KARACHI", "SUKKUR", "LOWER" , "DIR"];
// for(var i = 0; i <= 3; i++){
//     if(cityToCheck === cleanestCities[i]){
// alert("its one ofn the cleanest city");

//         }
// }

//var cityToCheck = "boston"
// var someChars = cityToCheck.slice(2, 5);
// var someChars = cityToCheck.slice(3);

// alert(someChars);


//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
//  console.log(cappedCity)



 		    //var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. ";
//  var firstChar = text.indexOf("World War II");
//  if (firstChar === 61) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }
// console.log(text);


// var text = "my name sui bilal"
// var firstChar = text. indexOf("bilal")
// console.log(firstChar)

// var firstName = "Bilal";

// //  var firstChar = firstName.slice(0, 1);
// //  console.log(firstChar)

// var lastChar = firstName.charAt(firstName.length - 2);
// console.log(lastChar)

// var newText = text.replace("World War II","Seacond World War");
// var newText = text.replace(/World War II/g, "the Second World War");
// console.log(newText)

// var a = 2.5
// a = Math.round(a);
// console.log(a)


//  var a = 0.000001
//  a = Math.ceil(a);
//  console.log(a)

// var a = prompt("enter your AGE!")
// var b = parseInt(a) + 1
// console.log(b)

// var a = "24";
//  var b = Number(a);
// console.log (b)


// var a = 25;
// var b = a.toString();
// console.log (b);

//  var a =new Date();
// var b = a.getHours();
// alert(b);




// var a = new Date();
// var b = a.getTime();
// alert(b);


// var today = new Date();
// var futureDay = new Date("June 30 , 2035");
// var mstoday = today.getTime;
// var msfutureDay = futureDay.getTime;
// var diff = msfutureDay - mstoday;
// var msdiff = diff/ (1000 * 60 * 60 * 24);
// msdiff = Math.floor(msdiff);
// alert(diff);


// var a = new Date();
// a.setFullYear(1996);
// a.setMonth(0);
// a.setDate(4);
// alert(a);





// function tellTime(){
//                 var now = new Date();
// 				theHr = now.getHours();
// 				theMin = now.getMinutes();
// 				alert("current time:"  + theHr + ":" + theMin)
				



// }

// tellTime();







// function greetUser(){
// 	alert("hello world");
// }

// greetUser();




function greetUser(greeting){
	alert("greeting")

}

greetUser();
