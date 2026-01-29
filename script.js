let userScore = Number(localStorage.getItem("userScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");

userScoreEl.innerText = userScore;
computerScoreEl.innerText = computerScore;

function toggleRules() {
  document.getElementById("rules").classList.toggle("hidden");
}

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const pcChoice = choices[Math.floor(Math.random() * 3)];

  let result = "TIE UP";

  if (userChoice !== pcChoice) {
    const win =
      (userChoice === "rock" && pcChoice === "scissors") ||
      (userChoice === "paper" && pcChoice === "rock") ||
      (userChoice === "scissors" && pcChoice === "paper");

    if (win) {
      result = "YOU WIN";
      userScore++;
    } else {
      result = "YOU LOST";
      computerScore++;
    }
  }

  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);

  userScoreEl.innerText = userScore;
  computerScoreEl.innerText = computerScore;

  showResult(userChoice, pcChoice, result);
}

function showResult(user, pc, result) {
  gameArea.classList.add("hidden");
  resultArea.classList.remove("hidden");

  userPick.src = `assets/${user}.svg`;
  pcPick.src = `assets/${pc}.svg`;

  userRing.className = `ring ${user}`;
  pcRing.className = `ring ${pc}`;

  nextBtn.classList.add("hidden");

  if (result === "TIE UP") {
    resultText.innerText = "TIE UP";
    resultSub.innerText = "";
    resultBtn.innerText = "REPLAY";
    return;
  }

  resultText.innerText = result;
  resultSub.innerText = "AGAINST PC";
  resultBtn.innerText = "PLAY AGAIN";

  if (result === "YOU WIN") {
    userRing.classList.add("win-ring");
    nextBtn.classList.remove("hidden");
  }

  if (result === "YOU LOST") {
    pcRing.classList.add("win-ring");
  }
}

function playAgain() {
  resultArea.classList.add("hidden");
  gameArea.classList.remove("hidden");
}

function showHurray() {
  resultArea.classList.add("hidden");
  scoreBoard.classList.add("hidden");
  hurray.classList.remove("hidden");
}

function resetGame() {
  hurray.classList.add("hidden");
  scoreBoard.classList.remove("hidden");
  gameArea.classList.remove("hidden");
}
