const questions = [
  "Have I done anything wrong?",
  "Do you still love me?",
  "Do you want me to leave?",
  "Do you miss me when I'm not around?",
  "Do I make you smile?",
  "Will you forgive me?",
  "Do you believe in us?",
  "Will you be mine forever?"
];

let currentStep = 0;
let yesCount = 0;
let noCount = 0;

const questionEl = document.getElementById("question");
const startBtn = document.getElementById("start-btn");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const characterImg = document.getElementById("character-img");

// Start game
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  yesBtn.classList.remove("hidden");
  noBtn.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  if (currentStep < questions.length) {
    questionEl.textContent = questions[currentStep];
  } else {
    endGame();
  }
}

yesBtn.addEventListener("click", () => {
  yesCount++;
  characterImg.src = "avatar.png"; // smiling
  nextStep();
});

noBtn.addEventListener("click", () => {
  noCount++;
  characterImg.src = "avatar-2.png"; // sad
  nextStep();
});

function nextStep() {
  currentStep++;
  setTimeout(() => {
    characterImg.src = "avatar-3.png"; // neutral
    showQuestion();
  }, 1000);
}

function endGame() {
  yesBtn.classList.add("hidden");
  noBtn.classList.add("hidden");

  if (yesCount > noCount) {
    questionEl.textContent = "Yay! She forgives you 💕 You both are happy again!";
    characterImg.src = "avatar.png";
  } else {
    questionEl.textContent = "Oh no… She’s still upset 💔 Try again!";
    characterImg.src = "avatar-2.png";
  }
}