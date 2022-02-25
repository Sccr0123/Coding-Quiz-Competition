var highScores = [];

//Links buttons to js
var question = document.querySelector("#question");
var option1 = document.querySelector("#btn1");
var option2 = document.querySelector("#btn2");
var option3 = document.querySelector("#btn3");
var option4 = document.querySelector("#btn4");
var timerOutput = document.querySelector("#timer");
var finalScore = document.querySelector("#final-score");

var questions = [
	{
		title: "Commonly Used Data Types Do Not Include: ",
		answer1: "1. Strings",
		answer2: "2. Booleans",
		answer3: "3. Alerts",
		answer4: "4. Numbers",
		correct: 3,
	},
	{
		title: "The Condition In An If / Else Statement Is Enclosed With __________.",
		answer1: "1. Quotes",
		answer2: "2. Curly Brackets",
		answer3: "3. Parenthesis",
		answer4: "4. Square Brackets",
		correct: 3,
	},
	{
		title: "Arrays In JavaScript Can Be Used To Store __________.",
		answer1: "1. Numbers And Strings",
		answer2: "2. Other Arrarys",
		answer3: "3. Booleans",
		answer4: "4. All Of The Above",
		correct: 4,
	},
	{
		title: "String Values Must Be Enclosed Within __________ When Being Assigned To Variables",
		answer1: "1. Commas",
		answer2: "2. Curly Brackets",
		answer3: "3. Quotes",
		answer4: "4. Parenthesis",
		correct: 3,
	},
	{
		title: "A Very Useful Tool Used During Development And Debugging For Printing Content To The Debugger Is: ",
		answer1: "1. JavaScript",
		answer2: "2. Terminal / Bash",
		answer3: "3. For Loops",
		answer4: "4. Console.log",
		correct: 4,
	},
];

var questionNum = 0;
var answer = "";
var timeLeft = 59;

startGame = function () {
	localStorage.removeItem("currentScore");
	timer();
	printQuestion();
};

printQuestion = function () {
	if (questionNum < questions.length) {
		question.textContent = questions[questionNum].title;
		btn1.textContent = questions[questionNum].answer1;
		btn2.textContent = questions[questionNum].answer2;
		btn3.textContent = questions[questionNum].answer3;
		btn4.textContent = questions[questionNum].answer4;
	} else if (questionNum >= questions.length) {
		getScore(timeLeft + 1);
	}
};

nextQuestion = function () {
	questionNum = questionNum + 1;
	printQuestion();
};

getScore = function (score) {
    score = score.toString();
	localStorage.setItem("currentScore", score);
	location.href = "./score.html";
};

checkOne = function () {
	console.log(questions[questionNum].correct);
	if (questions[questionNum].correct === 1) {
		btn1.textContent = "Correct!";
		setTimeout(nextQuestion, 1000);
	} else {
		btn1.textContent = "Incorrect!";
		timeLeft = timeLeft - 10;
		setTimeout(nextQuestion, 1000);
	}
};

checkTwo = function () {
	if (questions[questionNum].correct === 2) {
		btn2.textContent = "Correct!";
		setTimeout(nextQuestion, 1000);
	} else {
		btn2.textContent = "Incorrect!";
		timeLeft = timeLeft - 10;
		setTimeout(nextQuestion, 1000);
	}
};

checkThree = function () {
	if (questions[questionNum].correct === 3) {
		btn3.textContent = "Correct!";
		setTimeout(nextQuestion, 1000);
	} else {
		btn3.textContent = "Incorrect!";
		timeLeft = timeLeft - 10;
		setTimeout(nextQuestion, 1000);
	}
};

checkFour = function () {
	if (questions[questionNum].correct === 4) {
		btn4.textContent = "Correct!";
		setTimeout(nextQuestion, 1000);
	} else {
		btn4.textContent = "Incorrect!";
		timeLeft = timeLeft - 10;
		setTimeout(nextQuestion, 1000);
	}
};

timer = function () {
	var timer = setInterval(function () {
		if (timeLeft > 0) {
			timerOutput.innerHTML = "<p>Timer: " + timeLeft + "</p>";
			timeLeft--;
		} else {
			// timerOutput.innerHTML = "<p>Timer: 0</p>";
			getScore(timeLeft);
		}
	}, 1000);
};

startGame();

option1.addEventListener("click", checkOne);
option2.addEventListener("click", checkTwo);
option3.addEventListener("click", checkThree);
option4.addEventListener("click", checkFour);
