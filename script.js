let userScore = Number(localStorage.getItem("userScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

document.getElementById("userScore").innerText = userScore;
document.getElementById("computerScore").innerText = computerScore;

function toggleRules() {
  document.getElementById("rules").classList.toggle("hidden");
}

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;

  if (userChoice === computerChoice) {
    result = "TIE UP";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "YOU WIN";
    userScore++;
  } else {
    result = "YOU LOST";
    computerScore++;
  }

  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;

  showResult(userChoice, computerChoice, result);
}

function showResult(user, pc, result) {
  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("resultArea").classList.remove("hidden");

  document.getElementById("userPick").innerText = symbol(user);
  document.getElementById("pcPick").innerText = symbol(pc);
  document.getElementById("resultText").innerText = result;

  document.getElementById("userRing").className = "ring";
  document.getElementById("pcRing").className = "ring";
  document.getElementById("nextBtn").classList.add("hidden");

  if (result === "YOU WIN") {
    document.getElementById("userRing").classList.add("win-ring");
    document.getElementById("nextBtn").classList.remove("hidden");
  }

  if (result === "YOU LOST") {
    document.getElementById("pcRing").classList.add("win-ring");
  }
}

function symbol(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  return "✌️";
}

function playAgain() {
  document.getElementById("resultArea").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
}

function showHurray() {
  document.getElementById("resultArea").classList.add("hidden");
  document.getElementById("scoreBoard").classList.add("hidden");
  document.getElementById("hurray").classList.remove("hidden");
}

function resetGame() {
  document.getElementById("hurray").classList.add("hidden");
  document.getElementById("scoreBoard").classList.remove("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
}
