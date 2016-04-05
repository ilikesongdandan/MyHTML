var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  // fruits[fruits.length] = fruit;
  var fruitReg=new RegExp('[a-zA-Z]+');
  var emailReg=new RegExp('^[a-zA-Z1-9]+@[a-zA-Z1-9.]+')
  while(true){
  	if(fruitReg.test(fruit)){
  		break;
  	}
  	else{
  		fruit = prompt("What is your favorite fruit? only in English");
  	}
  }
  fruits.push(fruit);
  document.getElementById("fruits").innerHTML = fruits;
}

function test(){
  alert("hello");
}
function test(){
  alert("wangjj");
}