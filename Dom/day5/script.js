const main = document.querySelector("main");
const overlay = document.querySelector("#overlay");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");
const timerDisplay = document.querySelector("#timer");
const scoreDisplay = document.querySelector("#score");
const finalScoreDisplay = document.querySelector("#finalScore");

// Build target box dynamically
const box = document.createElement("div");
box.classList.add("box");

let gameInterval;
let countdownInterval;
let timeRemaining = 20;
let score = 0;
let isPlaying = false;

const randomColor = () => {
  let r = Math.floor(Math.random() * 180) + 75; // Avoids pure blacks/dark colors
  let g = Math.floor(Math.random() * 180) + 75;
  let b = Math.floor(Math.random() * 180) + 75;
  return `rgb(${r}, ${g}, ${b})`;
};

const randomBox = () => {
  if (!isPlaying) return;

  box.style.backgroundColor = randomColor();
  main.append(box);

  // Measure boundaries accurately
  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  // Bound positions within container walls safely
  const rY = Math.max(0, Math.floor(Math.random() * mainH));
  const rX = Math.max(0, Math.floor(Math.random() * mainW));

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

const startGame = () => {
  // Clear any stray timers before starting a session
  clearInterval(gameInterval);
  clearInterval(countdownInterval);

  // Setup Initial State values
  score = 0;
  timeRemaining = 20;
  isPlaying = true;

  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeRemaining;
  overlay.style.display = "none";
  startBtn.style.visibility = "hidden"; // Hide initial start button during active play

  randomBox();

  // Box migration intervals (Moves box every 1 sec if missed)
  gameInterval = setInterval(() => {
    randomBox();
  }, 1000);

  // Precise System clock countdown tracker
  countdownInterval = setInterval(() => {
    timeRemaining -= 1;
    timerDisplay.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
};

const endGame = () => {
  isPlaying = false;
  clearInterval(gameInterval);
  clearInterval(countdownInterval);

  box.remove(); // Drop the active game element out of DOM tree
  finalScoreDisplay.textContent = score;
  overlay.style.display = "flex";
  startBtn.style.visibility = "visible";
  startBtn.innerText = "Restart";
};

// Hit-detection handler: Scores point and triggers instant relocate
box.addEventListener("click", (e) => {
  e.stopPropagation(); // Stops double fire triggers on overlapping elements
  if (!isPlaying) return;

  score += 1;
  scoreDisplay.textContent = score;

  // Instantly teleport box so user can't click it twice in the same position
  randomBox();
});

// Event Triggers
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
