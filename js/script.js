//js
//show date
function showDate(){
	document.getElementById('s_d').innerHTML= Date();
}
//text change
function	textChange(){
	document.getElementById('t_c').innerHTML= "Allah is Almighty";
}
//bulb on/off
function bulbOn(){
	document.getElementById('b_s').src="image/on.gif";
}
function bulbOff(){
	document.getElementById('b_s').src="image/off.gif";
}
//Color change
function colorChange(){
	document.getElementById('c_c').style.color="red";
}
//show/hide
function	textShow(){
	document.getElementById('text').style.display="block";
}
function	textHide(){
	document.getElementById('text').style.display="none";
}
//Calculation on HTML
var number1= 5
var number2= 6
var number3= number1+number2
function calculationAddition(){
	document.getElementById('addition').innerHTML= number3;
}
//alert
function	textChange(){
	var info= document.getElementsByTagName('h3')
	alert(info.length)
}
//calculation using let
let number4, number5, Number6;
number4 = 9; 
numner5 = 7;
number6 = number4 - number5;
function calculate(){
	document.getElementById('deduct').innerHTML= number6;
}
