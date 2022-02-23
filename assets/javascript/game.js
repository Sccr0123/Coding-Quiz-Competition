var option1 = document.querySelector("#btn1");
var option2 = document.querySelector("#btn2");
var option3 = document.querySelector("#btn3");
var option4 = document.querySelector("#btn4");

button1 = function () {
	alert("Option 1");
};

button2 = function () {
	alert("Option 2");
};

button3 = function () {
	alert("Option 3");
};

button4 = function () {
	alert("Option 4");
};

option1.addEventListener("click", button1);
option2.addEventListener("click", button2);
option3.addEventListener("click", button3);
option4.addEventListener("click", button4);
