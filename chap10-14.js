// var num1 = prompt("enter a value ");
// var num2 = prompt("enter a second value");
// var num3 = prompt("enter a sign i.e +,-,*./,%");
// var val1 = parseInt(num1);
// var val2 = parseInt(num2);
// alert(num1 + num3 + num2 + " = " + (val1 +  val2));
// ++++++++++++++++++++++++++++++++++++++

// percentage calculator
var course1 = parseInt(prompt("enter marks of cours 1"));
var course2 = parseInt(prompt("enter marks of cours 2"));
var course3 = parseInt(prompt("enter marks of cours 3"));
var course4 = parseInt(prompt("enter marks of cours 4"));
var course5 = parseInt(prompt("enter marks of cours 5"));
var total = 500;
var obtMarks = course1 + course2 + course3 + course4 + course5;
var percentage = (obtMarks/total) * 100;
alert("your percentage is " + percentage + "%")

