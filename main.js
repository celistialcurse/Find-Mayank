const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const game_containerEl = document.getElementById("game_container");

let score = 0;
let timer = 60;
let mayankIndex = Math.floor(Math.random() * 30);

function createPeople(index) {
  const person = document.createElement("div");
  person.classList.add("person");
  person.textContent = index === mayankIndex ? "👨🏿" : "🧒🏻";
  person.addEventListener("click", () => handlePersonClick(index));
  game_containerEl.appendChild(person);
}

function handlePersonClick(index) {
  if (index === mayankIndex) {
    score++;
    mayankIndex = Math.floor(Math.random() * 30);
  } else {
    score--;
  }
  updateGame();
}

function updateGame() {
  scoreEl.textContent = `Score: ${score}`;
  game_containerEl.innerHTML = ""; // Clear the container
  for (let i = 0; i < 30; i++) {
    createPeople(i);
  }
}

function startTimer() {
  const timerInterval = setInterval(() => {
    timer--;
    timerEl.textContent = `Timer: ${timer}`;
    if (timer <= 0) {
      clearInterval(timerInterval);
      game_containerEl.innerHTML = `<div>Game Over. Your final score is: ${score}</div>`;
    }
  }, 1000);
}

updateGame();
startTimer();
