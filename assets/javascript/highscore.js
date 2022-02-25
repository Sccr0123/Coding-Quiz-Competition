var highScores = localStorage.getItem("HighScores");
var scores = [
	{
		name: "",
		score: "",
	},
	{
		name: "",
		score: "",
	},
	{
		name: "",
		score: "",
	},
	{
		name: "",
		score: "",
	},
	{
		name: "",
		score: "",
	}
];
scores[0] = document.querySelector("#score1");
scores[1] = document.querySelector("#score2");
scores[2] = document.querySelector("#score3");
scores[3] = document.querySelector("#score4");
scores[4] = document.querySelector("#score5");
highScores = JSON.parse(highScores);
var currentScore = [];
var listScores = document.querySelector("#high-score");
console.log(highScores);

for (var i = 0; i < highScores.length; i++){
    scores[i].innerHTML = "<p>" + highScores[i].name + ": " + highScores[i].score + "</p>";
};

