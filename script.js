const choices = ["pedra", "papel", "tesoura"];

const playerChoiceEl = document.getElementById("playerChoice");
const cpuChoiceEl = document.getElementById("cpuChoice");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");
const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let cpuScore = 0;

function getCpuChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, cpu) {
  if (player === cpu) return "empate";

  const wins =
    (player === "pedra" && cpu === "tesoura") ||
    (player === "papel" && cpu === "pedra") ||
    (player === "tesoura" && cpu === "papel");

  return wins ? "jogador" : "cpu";
}

function updateScore(winner) {
  if (winner === "jogador") playerScore += 1;
  if (winner === "cpu") cpuScore += 1;

  playerScoreEl.textContent = playerScore;
  cpuScoreEl.textContent = cpuScore;
}

function playRound(playerChoice) {
  const cpuChoice = getCpuChoice();
  const winner = getWinner(playerChoice, cpuChoice);

  playerChoiceEl.textContent = playerChoice;
  cpuChoiceEl.textContent = cpuChoice;

  if (winner === "empate") {
    resultEl.textContent = "Empate!";
  } else if (winner === "jogador") {
    resultEl.textContent = "Você venceu esta rodada!";
  } else {
    resultEl.textContent = "CPU venceu esta rodada!";
  }

  updateScore(winner);
}

function resetScore() {
  playerScore = 0;
  cpuScore = 0;
  playerScoreEl.textContent = "0";
  cpuScoreEl.textContent = "0";
  playerChoiceEl.textContent = "-";
  cpuChoiceEl.textContent = "-";
  resultEl.textContent = "Faça sua jogada!";
}

document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

resetBtn.addEventListener("click", resetScore);
