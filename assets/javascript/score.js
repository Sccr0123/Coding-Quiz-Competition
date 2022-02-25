var scoreOutput = document.querySelector("#score");
var form = document.querySelector("#playerForm");
var currentScore = 0;
var currentName = "Placeholder2";
var currentPlayer = {
	name: "",
	score: -5,
};

var highScores = [
	{
		name: "Placeholder",
		score: -1,
	},
	{
		name: "Placeholder",
		score: -2,
	},
];

getScore = function () {
	localStore = localStorage.getItem("HighScores");
	console.log(JSON.parse(localStore));
	if (localStore != undefined) {
		highScores = JSON.parse(localStore);
	}

	currentScore = localStorage.getItem("currentScore");
	currentScore = parseInt(currentScore);
	showScore();
};

showScore = function () {
	scoreOutput.innerHTML = "<p>You Scored A " + currentScore + "!</p>";
};

checkHighScore = function () {
	console.log("Hello");
	console.log(highScores.length);
	currentPlayer.name = document.getElementById("pName").value;
	currentPlayer.score = currentScore;
	console.log(highScores.length);
	for (var i = 0; i < highScores.length; i++) {
		if (currentPlayer.score > highScores[i].score) {
			highScores.splice(i, 0, currentPlayer);
			highScores = highScores.slice(0, 5);
			console.log(highScores);
			localStorage.setItem("HighScores", JSON.stringify(highScores));
			break;
		} else if (currentPlayer.score === highScores[i].score) {
			highScores.splice(i + 1, 0, currentPlayer);
			highScores = highScores.slice(0, 5);
			console.log(highScores);
			localStorage.setItem("HighScores", JSON.stringify(highScores));
			break;
		}
	};
	location.href = "./high-score.html";
};

getScore();
form.addEventListener("submit", checkHighScore);
