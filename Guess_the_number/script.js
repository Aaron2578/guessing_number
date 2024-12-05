var scores = 10;
var score = document.getElementById("score");

function sum() {
  var num1 = document.getElementById("num1");
  var a = Number(num1.value);
  var randomNumber = Math.random();
  var generatedNumber = Math.floor(randomNumber * 10);

  if (a == generatedNumber) {
    result.textContent = "Right !";
    alert("You Won!");
    document.getElementById('result').style.color='Green';
    document.getElementById('result').style.fontSize='25px';
  } else {
    scores = scores - 1;

    if (scores >= 0) {
      score.textContent = "Score: " + scores;
      result.textContent = "Wrong";
      document.getElementById('result').style.color='Red';
      document.getElementById('result').style.fontSize='25px';
      console.log(generatedNumber);
    }
  }
}
