/*
// 1. Way to print in JavaScript

console.log("Hello this is print way.");
alert("This is alert for print way");
document.write("This is Text");
*/

/*
// 2. JavaScript console API

console.log("Hello World!!");
console.log("Hello World!!", 4+6, "Another log");
console.warn("This is warning");
console.error("This is an error");
console.assert(2==3);
console.clear();
console.count();
console.group('group');
console.groupCollapsed("group item");
console.groupEnd('group');
console.info("Hello World!!");
console.table({firstname:"John", lastname:"Doe"});
console.time();
console.timeEnd();
console.trace();
*/

/*
// 3. JavaScript Variables
// Containers to store data values.

console.info("JavaScript Variables");
var number1 = 43;
var number2 = 33;
console.log(number1+number2);
*/

/*
// 4. Data Types in JavaScripts
// Number

var num1 = 56;
var num2 = 65;
*/

/*
// String

var str1 = "This is a string";
var str2 = "This is a string";
*/

/*
// objects

var marks = {
  ravi: 23,
  shubham: 99.997,
};
console.log(marks);
*/

/*
// Booleans

var a = true;
var b = false;
console.log(a, b);
*/

/*
var und = undefined;
console.log(und);

var n = null;
console.log(n);
*/

/*
  At avery high level, there are two type of data types in javascript

  1. Premitive data types: undefined, null, number, string, boolean, symbol
  2. reference data types: Arrays and objects
*/

/*
// Arrays

var arr = [1, 2, "string", 4, 5];
console.log(arr[2]);
*/

/*
// Operators in JavaScript

var a = 23;
var b = 23;
console.log("The Value of a + b", a+b);
console.log("The Value of a - b", a-b);
console.log("The Value of a * b", a*b);
console.log("The Value of a / b", a/b);
*/

/*
// Assignment Operators

var c = a;
c += 2;
console.log(c);
*/

/*
// Comparison Operators

var x = 34;
var y = 43;
console.log(x == y);
console.log(x <= y);
*/

/*
// Logical operators
// logical and

console.log(true && true);
console.log(true && false);
console.log(false && false);
logical or
console.log(true || true);
console.log(true || false);
console.log(false|| false);
logical not
console.log(!false);
console.log(!true);
*/

/*
// Function

function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(12, 34);
c2 = avg(10, 13);
console.log(c1, c2);

*/

/*
// Conditionals in JavaScript
// if else..

var age = 24;
if (age > 18) {
  console.log("You can drive!!");
} else {
  console.log("You can't drive!!");
}
*/

/*
// if else ladder

if (age > 18) {
  console.log("You can drive!!");
} else if (age > 55) {
  console.log("You can't drive!!");
}
*/

/*
// Loops
// for loop

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/

/*
// For Each Function

arr.forEach(function (element) {
  console.log(element);
});
*/

/*
//While loop

let j = 0;
while (j<arr.length) {
  console.log(arr[j]);
  j++;
}
*/

/*
//Do whiw loop

do{
  console.log(arr[j]);
  j++;
} while(j< arr.length);
*/

/*
//Break
var arr = [1,2,3,4,5,6,7,8,9];
for(var i=0; i<arr.length; i++){
  if(i==8){
    break;
  }
  console.log(arr[i]);
}
*/

/*
//Continue
var arr = [1,2,3,4,5,6,7,8,9];
for(var i=0; i<arr.length; i++){
  if(i==2){
    continue;
  }
  console.log(arr[i]);
}
*/

/*
let myArr = ["fan", "books", 34, null, true];
console.log(myArr.length);
console.log(myArr);
myArr.pop(); // Last element deleted
myArr.push("harry"); // Add this in Last
myArr.shift(); // delete first element
myArr.unshift("harry");// add element to begin
myArr.toString(); // convert in to string
myArr.join(" * ");
console.log(myArr);
*/

/*
//String Method in javaScript
let myLovelyString = "Haary in a good boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("boy"));
console.log(myLovelyString.lastIndexOf("boy"));
*/

/*
//Date Methods
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
*/

/*
//DOM manipulation
let elem = document.getElementById("click");
let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "pink";
elemClass[1].style.background = "aqua";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.remove("container");
console.log(elem.innerHTML);
console.log(elem.innerText);
*/

/*
//by tagname
let tgName = document.getElementsByTagName("div");
console.log(tgName);
createdElement = document.createElement('p');
createdElement.innerText = "This is created element";
tgName[0].appendChild(createdElement);
*/

/*
//Query Selector
sel = document.querySelector('.container');
console.log(sel);

selAll = document.querySelector('.container');
console.log(selAll);
*/

/*
//Events in JavaScript
function clicked(){
  console.log("The Button Was Clicked");
}

window.onload = function(){
  console.log("The Document Was Loaded");
}
//Events in JavaScript
firstContainer.addEventListener('click', function(){
  console.log("Clicked on container");
});

firstContainer.addEventListener('mouseover', function(){
  console.log("Mouse Over");
});

firstContainer.addEventListener('mouseout', function(){
  console.log("Mouse out");
});

let pervmsg = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mousedown', function(){
  let msg = document.querySelectorAll('.container')[1].innerHTML = "<b> First Container Clicked";
});

firstContainer.addEventListener('mouseup', function(){
  document.querySelectorAll('.container')[1].innerHTML = pervmsg;
  // console.log("Mouse down");
});

*/

/*
//Arrow function
function sum(a, b){
  return a+b;
}

summ = (a,b)=>{
  return a+b;
}

logKaro = ()=>{
  console.log("I am your log!!");
  document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired";
}
//Set Timeout and setinterval
//Use clearInterval(clr)/clearTimeout to cancel setinterval/ setTimeout
setTimeout(logKaro, 2000);
setInterval(logKaro, 2000);
*/

/*
//localStorage in JavaScript
localStorage.setItem('name','mickey');
localStorage.getItem('name');
console.log(localStorage);
loalStorage.removeItem('name'); //clear one
localStorage.clear(); // clear all
*/

/*
//Json
//accept only double qotes
obj = {name: 'mickey', length: 1, a: {name: "harry", length: 1}}
jso = JSON.stringify(obj);
console.log(typeof jso, jso);
parsed = JSON.parse(`{"name": "harry", "lenght":1, "a":{"this":"that"}}`)
console.log(parsed);
*/

//Template literals - Backticks
a = 34;
console.log(`this is my ${a}`); // $() converts in variables
