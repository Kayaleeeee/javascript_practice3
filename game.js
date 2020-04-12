const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector("modal");

const scoreboard = {
  Player: 0,
  Computer: 0,
};

function play(e) {
  const playerChoice = e.target.id;
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, ComputerChoice);
  showWinner(winner, ComputerChoice);
}

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (0.67 > rand >= 0.34) {
    return "paper";
  } else {
    return "scissors";
  }
}

choices.forEach(function (choice) {
  choice.addEventListener("click", play);
});

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.Player++;
    result.innerHTML = `
          <h1 class="text-win">You win</h1>
          <i class="fa fa-hand-${computerChoice}-o" aria-hidden="true"></i>
          <p class="text-win">Computer Chose ${computerChoice}</p>
          `;
  } else if (winner === "computer") {
    scoreboard.Computer++;
    result.innerHTML = `
          <h1 class="text-win">Computer win</h1>
          <i class="fa fa-hand-${computerChoice}-o" aria-hidden="true"></i>
          <p class="text-win">Computer Chose ${computerChoice}</p>
          `;
  } else {
    result.innerHTML = `
          <h1 class="text-win">Draw</h1>
          <i class="fa fa-hand-${computerChoice}-o" aria-hidden="true"></i>
          <p class="text-win">Computer Chose ${computerChoice}</p>
          `;
  }
  score.innerHTML = `
      <p>Player : ${scoreboard.Player}</p>
      <p>Computer : ${scoreboard.Computer}</p>
      `;
  modal.style.display = "block";
}

window.addEventListener("click", clearModal);

function clearModal(e) {
  if (e.target === modal || e.target === modalContent) {
    modal.style.display = "none";
  }
}

function restartGame() {
  scoreboard.Player = 0;
  scoreboard.Computer = 0;
  score.innerHTML = `<p>Player : 0</p>
  <p>Computer : 0</p>`;
}

restart.addEventListener("click", restartGame);
