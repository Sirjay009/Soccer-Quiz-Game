//Get DOM elements
const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const playerImage = document.getElementById("random-image");
const message = document.getElementById("messages");
const score = document.getElementById("score");
const incorrect = document.getElementById("incorrect");
const restartButton = document.getElementById("restart-btn");

//Declare needed variables
let currentQuestion = 0; // Tracks the current question number
let correctScore = 0; // Stores the count of correct answers
let incorrectScore = 0; // Stores the count of incorrect answers
let maxPlays = 30; // Maximum number of questions to be played per game
let correctAnswer = ""; // Holds the correct answer for the current question
let isAnswering = true; // Tracks whether the game is currently accepting answers
let questionData = [];

async function loadQuestionsFromFile() {
  try {
    const response = await fetch("questions.json");
    if (!response.ok) {
      throw new Error(`Failed to load questions. Status: ${response.status}`);
    }
    const data = await response.json();
    questionData = data;

    // Validate question data format
    questionData.forEach((question, index) => {
      if (
        !question.image ||
        !question.answer ||
        !Array.isArray(question.options) ||
        question.options.length !== 4
      ) {
        console.error(`Invalid question data at index: ${index}`, question);
      }
    });

    runGame();
  } catch (error) {
    message.textContent = "Error loading game data.";
    console.error(error);
  }
}

function runGame() {
  welcomePage.style.display = "none";
  gameContainer.style.display = "block";
  currentQuestion = 0;
  correctScore = 0;
  incorrectScore = 0;
  isAnswering = true; // Reset flag here

  document.getElementById("score").textContent = "0";
  document.getElementById("incorrect").textContent = "0";
  score.textContent = correctScore;
  incorrect.textContent = incorrectScore;
  restartButton.style.display = "none";
  message.textContent = "";

  loadQuestion();
}

let usedQuestions = [];

function loadQuestion() {
  if (usedQuestions.length === questionData.length) {
    usedQuestions = []; // Reset if all questions used
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questionData.length);
  } while (usedQuestions.includes(randomIndex));

  usedQuestions.push(randomIndex);

  // Check if questionData[randomIndex] is defined
  const player = questionData[randomIndex];
  if (!player) {
    console.error("Invalid question data at index:", randomIndex);
    return; // Exit if there's an issue with the data
  }

  correctAnswer = player.answer; // This is where the error occurs
  playerImage.src = player.image;

  playerImage.onerror = function () {
    this.src = "assets/images/pexels-diego-santacruz-252431696-12616082.jpg"; // Fallback image
    message.textContent = "Image not available";
  };

  message.textContent = "";
  restartButton.style.display = "none";

  const choices = shuffleArray(player.options);
  const answerContainer = document.getElementById("answer-buttons");
  answerContainer.innerHTML = ""; // Clear previous buttons

  choices.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.textContent = option;
    button.addEventListener("click", function () {
      checkAnswer.call(this);
    });
    answerContainer.appendChild(button);
  });
}

startButton.addEventListener("click", () => {
  welcomePage.style.display = "none";
  gameContainer.style.display = "block";
  loadQuestionsFromFile();
});

function checkAnswer() {
  if (!isAnswering) return;

  isAnswering = false; // Prevent further clicks

  if (this.innerText.toLowerCase() === correctAnswer.toLowerCase()) {
    message.textContent = "Congrats! Answer is Correct.";
    message.style.color = "green";
    incrementScore();
  } else {
    message.textContent = `Incorrect! The answer was -${correctAnswer}-`;
    message.style.color = "red";
    incrementWrongScore();
  }
  currentQuestion++;
  if (currentQuestion >= maxPlays) {
    setTimeout(() => {
      endGame();
      isAnswering = false; // Do not re-enable on game end
    }, 3000);
  } else {
    setTimeout(() => {
      loadQuestion();
      isAnswering = true; // Re-enable after loading new question
    }, 1500);
  }
}

// Remove listeners during transitions
function disableAnswers() {
  for (let button in optionButtons) {
    optionButtons[button].removeEventListener("click", checkAnswer);
  }
}

function enableAnswers() {
  for (let button in optionButtons) {
    optionButtons[button].addEventListener("click", checkAnswer);
  }
}

function incrementScore() {
  correctScore++;
  document.getElementById("score").innerText = correctScore;
}

function incrementWrongScore() {
  incorrectScore++;
  document.getElementById("incorrect").innerText = incorrectScore;
}

function endGame() {
  message.textContent = "";
  restartButton.style.display = "none";
  showResults();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
  return array;
}

//Add event listeners
restartButton.addEventListener("click", () => {
  runGame();
});

function showResults() {
  gameContainer.style.display = "none";
  const resultsContainer = document.getElementById("results-container");
  const finalScoreText = document.getElementById("final-score");
  const feedbackMessage = document.getElementById("feedback-message");
  const playAgainBtn = document.getElementById("play-again-btn");

  resultsContainer.style.display = "flex";

  finalScoreText.textContent = `You got ${correctScore} out of ${maxPlays} questions right.`;

  const accuracy = (correctScore / maxPlays) * 100;
  let feedback;

  if (accuracy === 100) {
    feedback = "⚽ Incredible! You got a perfect score!";
  } else if (accuracy >= 80) {
    feedback = "🔥 Awesome! You're a soccer genius!";
  } else if (accuracy >= 50) {
    feedback = "👍 Good job! But there's room for improvement.";
  } else {
    feedback = "😅 Keep practicing! You'll get better.";
  }

  feedbackMessage.textContent = feedback;

  playAgainBtn.onclick = () => {
    resultsContainer.style.display = "none";
    runGame();
  };
}
