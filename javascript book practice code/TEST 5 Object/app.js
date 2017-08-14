


//  var plan1Name = "Basic";
//  var plan1Price = 3.99;
//  var plan1Space = 100;
//  var plan1Data = 1000;
//  var plan1Pages = 10;
//  var plan2Name = "Professional";
//  var plan2Price = 5.99;
//  var plan2Space = 500;
//  var plan2Data = 5000;
//  var plan2Pages = 50;
//  var plan3Name = "Ultimate";
//  var plan3Price = 9.99;
//  var plan3Space = 2000;
//  var plan3Data = 20000;
//  var plan3Pages = 500;


//  alert("The cost of the " + plan2Name + "package is $" + plan2Price + " per month.");






//  var plan1 = {
//  name: "Basic",
//  price: 3.99,
//  space: 100,
//  transfer: 1000,
//  pages: 10
//  };

// alert("The cost of the " + plan1.name + " package is $" + plan1.price + " per month.");


//  var plan2 = {
//      name:"professional",
//      price:5.99,
//      space:100,
//      transfer:1000,
//      pages:10
//  };

// // alert("The cost of the " + plan2.name + " package is $" + plan2.price + " per month.");


// plan2.discountMonths = [6 , 8 , 11];
// // console.log(plan2)







// var mo = plan2.discountMonths[2];
// console.log(mo);


// delete plan1.space;


// propertyExists = "price" in plan1;
// console.log(propertyExists)





//  var plan1 = {
//  name: "Basic",
//  price: 3.99,
//  space: 100,
//  transfer: 1000,
//  pages: 10,
//   discountMonths: [6, 7]
//  };




//  var gotThePrice = "price" in plan1;
//  console.log(gotThePrice)


//  var listOfProperties = [];
//  for (var prop in plan1) {
//  listOfProperties.push(prop);
//  }
// console.log(prop)






//  var listOfProperties = [];
//  for (var prop in plan1) {
//  if (plan1.hasOwnProperty(prop)) {
//  listOfProperties.push(prop);
//  }
//  }

 
// var isOwnedProperty = plan1.hasOwnProperty("papa");
// console.log(isOwnedProperty)












//  function calcAnnual() {
//  var bestPrice = plan1.price;
//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < plan1.discountMonths.length; i++) {
//  if (plan1.discountMonths[i] === thisMo) {
//  bestPrice = plan1.price * .8;
//  break;
//  }
//  }
//  return bestPrice * 12;
//  }

// var annPrice = calcAnnual();
// console.log(annPrice)




//  function calcAnnual(percentIfDisc) {
//  var bestPrice = plan1.price;
//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < plan1.discountMonths.length; i++) {
//  if (plan1.discountMonths[i] === thisMo) {
//  bestPrice = plan1.price * percentIfDisc;
//  break;
//  }
//  }
//  return bestPrice * 12;
//  }


//  var annPrice = calcAnnual(.85);
//  console.log(annPrice)



// function plan(name , price , space , transfer , pages , discountMonths){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//      this.calcAnnual = function(percentIfDisc) {
//  var bestPrice = this.price;

//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < this.discountMonths.length; i++) {
//  if (this.discountMonths[i] === thisMo) {
//  bestPrice = this.price * percentIfDisc;
//  break;
//  }
//  }
//  return bestPrice * 12;
//  };
// }





//  var p1 = new plan("Basic", 3.99, 100, 1000, 10,[6 , 7]);
//  var p2 = new plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
//  var p3 = new plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

//  var annPrice = p2.calcAnnual(.85)
//  console.log(annPrice)


//  plan.prototype.calcAnnual = function(percentIfDisc) {
//  var bestPrice = this.price;
//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < this.discountMonths.length; i++) {
//  if (this.discountMonths[i] === thisMo) {
//  bestPrice = this.price * percentIfDisc;
//  break;
//  }
//  }
//  return bestPrice * 12;
//  };








// var gotThePrice = calcAnnual() in plan;
// console.log(gotThePrice)





// function plan(name , price , space , transfer , pages , discountMonths){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//      this.prototype.calcAnnual = function(percentIfDisc) {
//  var bestPrice = this.price;

//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < this.discountMonths.length; i++) {
//  if (this.discountMonths[i] === thisMo) {
//  bestPrice = this.price * percentIfDisc;
//  break;
//  }
//  }
//  return bestPrice * 12;
//  };
// }


// plan.prototype.cancellable = false;














// var whereWeAt = window.location.href;    //browser ki location bataye gaa
// console.log(whereWeAt)




// var whereIsDomain = window.location.hostname;   // domain name bataye ga e.g. www.google.com
// console.log(whereIsDomain); 



// var thePath = window.location.pathname;      // ye path name bataye gaa
// console.log(thePath)




// var theAnchor = window.location.hash;     // anchor ka bataye gaa
// console.log(theAnchor)






// window.location.href = "http://www.google.com"




// var theDomain = window.location.hostname;
// var destination = "http://" + theDomain + "/1.html"
// window.location.href = destination;




//  window.location.assign("http://www.facebook.com")


// window.location.replace("http://www,google.com")

//  window.location.reload(false);

//history.back();
//  history.forward();





// var original = document.referrer;


//   var monkeyWindow = window.open();
//  var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from agroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>"
//  monkeyWindow.document.write(windowContent);


//var monkeyWindow = window.open("capuchin.html");

// monkeyWindow.close();










// var monkeyWindow = window.open("index.html", "win1");
// console.log(monkeyWindow)



// var monkeyWindow = window.open("", "win1");



// var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380");



// var w = window.open("", "", "width=420,height=380,left=200,top=100");



//  var windowSpecs =window.open( '', 'faq', 'width=420,height=380,left=20,top=10');
// ;









//  function checkForPopBlocker() {
//  var testPop = window.open("", "","width=100,height=100");
//  if (testPop === null || typeof(testPop === "undefined") ) {
//  alert("Please disable your popup blocker.");
//  }
// testPop.close();
//  }



