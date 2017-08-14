



// var p = document.getElementsByTagName("p");
// var content = p[4].innerHTML;
// console.log(content);










//  var div = document.getElementById("ny");
//  var p = div.getElementsByTagName("p");
//  var contents = p[1].innerHTML;






//  var p = document.children[0].children[1].children[1].children[1];
//  var contents = p.innerHTML;
//  console.log(contents)






//  var d = document.getElementById("humpty");

//  var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//       if (d.childNodes[i].nodeType === 1 ) {
//  pCounter++;
//  }
//  if (pCounter === 2) {
//  d.childNodes[i].innerHTML = "All his men.";
//  break;
//  }
//  }








// var d = document.getElementById("humpty");
// var pCounter = 0;
// for(var i=0; i<d.childNodes.length ; i++){
//     if(d.childNodes[i].nodeType === 1 ){
//         pCounter++;
//     }

// if(pCounter === 2){
//     d.childNodes[i].innerHTML = "kutta";
//     break;
// }
// }







// var a = document.getElementById("div2");
// var par = a.parentNode;
// console.log(par);




// var a = document.getElementById("div1")
// var b =a.nextSibling;
// console.log(b);





// var a = document.getElementById("div1")
// var b =a.previousSibling;
// console.log(b);



// var parent = document.getElementById("div2")
// var target = parent.firstChild;
//  var nName = target.nodeName;
// console.log(nName)





// var parent = document.getElementById("div1")
// var target = parent.firstChild;
//  var nName = target.nodeValue;
// console.log(nName)



// var liElements = document.getElementsByTagName("li");
// var howManyLi = liElements.length;

// var parentNode = document.getElementById("dl")
// var nodeList = parentNode.childNodes;
// console.log(nodeList)





// var parentNode = document.getElementById("dl")
// var nodeList = parentNode.childNodes;

// var howManyLi = nodeList.length;


// console.log(howManyLi)








// var divContainer = document.getElementById('container');

//    var attAvailable = divContainer.hasAttribute('id');
// console.log(attAvailable)



// divContainer.setAttribute('title', 'my div');
// divContainer.setAttribute('class', 'colorred');




// var a = document.getElementById("container").attributes;
// // var list = a.length;
// // console.log(list)

// var b = a[0].nodeValue;
// console.log(b)






// var nodeToAdd = document.createElement("p");
// nodeToAdd.setAttribute("class", "regular")

// var newText = document.createTextNode("Hello!")



// nodeToAdd.appendChild(newText);

// console.log(nodeToAdd)











// var a = document.getElementById("div1")
// var b = document.createElement("p")
// var c = document.createTextNode("Hello World!")
// b.appendChild(c);
// a.appendChild(b);
// console.log(b)





// var a = document.getElementById("div1")
// var b = document.createElement("p")
// var c = document.createTextNode("Hello World!")
// b.appendChild(c);

// var d = a.firstChild;
// console.log(d)
// a.insertBefore(b,d);











//  var parentDiv = document.getElementById("div2");
//  var nodeToRemove = parentDiv.childNodes[2];
//  parentDiv.removeChild(nodeToRemove);

