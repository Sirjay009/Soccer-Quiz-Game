//Define player data array
const players = [{
  name: "Alisson Becker",
  img: "assets/images/AlissonBecker.jpg"
},
{
  name: "André Onana",
  img: "assets/images/AndréOnana.jpg"
},
{
  name: "Antoine Griezmann",
  img: "assets/images/AntoineGriezmann.jpg"
},
{
  name: "AntonioRüdiger",
  img: "assets/images/AntonioRüdiger.jpg"
},
{
  name: "Bernardo Silva",
  img: "assets/images/BernardoSilva.png"
},
{
  name: "Bukayo Saka",
  img: "assets/images/BukayoSaka.jpg"
},
{
  name: "Cristiano Ronaldo",
  img: "assets/images/CristianoRonaldo.jpg"
},
{
  name: "Declan Rice",
  img: "assets/images/DeclanRice.jpg"
},
{
  name: "Erling Haaland",
  img: "assets/images/ErlingHaaland.jpg"
},
{
  name: "Florian Wirtz",
  img: "assets/images/FlorianWirtz.jpg"
},
{
  name: "Harry Kane",
  img: "assets/images/HarryKane.jpg"
},
{
  name: "Jamal Musiala",
  img: "assets/images/JamalMusiala.jpg"
},
{
  name: "Jude Bellingham",
  img: "assets/images/JudeBellingham.jpg"
},
{
  name: "Kevin De Bruyne",
  img: "assets/images/KevinDeBruyne.jpg"
},
{
  name: "Kylian Mbappé",
  img: "assets/images/KylianMbappe.jpg"
},
{
  name: "Lamine Yamal",
  img: "assets/images/LamineYamal.jpg"
},
{
  name: "Lionel Messi",
  img: "assets/images/LionelMessi.jpg"
},
{
  name: "Luka Modrić",
  img: "assets/images/LukaModric.jpg"
},
{
  name: "Martin Ødegaard",
  img: "assets/images/MartinOdegaard.jpg"
},
{
  name: "Mohamed Salah",
  img: "assets/images/MohamedSalah.jpg"
},
{
  name: "Phil Foden",
  img: "assets/images/PhilFoden.jpg"
},
{
  name: "Robert Lewandowski",
  img: "assets/images/RobertLewandowski.jpg"
},
{
  name: "Rodri",
  img: "assets/images/Rodri.jpg"
},
{
  name: "Sadio Mané",
  img: "assets/images/SadioMané.jpg"
},
{
  name: "Son Heung-min",
  img: "assets/images/SonHeung-min.png"
},
{
  name: "Toni Kroos",
  img: "assets/images/ToniKroos.jpg"
},
{
  name: "Victor Osimhen",
  img: "assets/images/VictorOsimhen.jpg"
},
{
  name: "Vigil van Dijk",
  img: "assets/images/VigilvanDijk.jpg"
},
{
  name: "Vincent Aboubakar",
  img: "assets/images/VincentAboubakar.jpg"
},
{
  name: "Vinicius Jr",
  img: "assets/images/ViniciusJr.jpg"
}
];

//Define DOM elements
const homePage = document.getElementById("home-page");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const gameArea = document.getElementById("game-area");
const randomImage = document.getElementById("random-image");
const choiceContainer = document.getElementById("choice-container");
const messages = document.getElementById("messages");
const nextButton = document.getElementById("next-btn");
const scoreDetails = document.getElementById("score-details");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");

//Add event listeners
startButton.addEventListener("click", runGame);
nextButton.addEventListener("click", nextPage);
restartButton.addEventListener("click", restartGame);

function runGame() {
  homePage.style.display = "none";
  gameContainer.style.display = "block";
  loadGame();
}

function loadGame() {
  if (currentQuestion < players.length) {
    const currentPlayer = players[currentQuestion];
    randomImage.src = currentPlayer.img;
    generateChoices(currentPlayer.name);
    messages.classList.add("hidden");
    nextButton.classList.add("hidden");
  } else {
    endGame();
  }
}

//Let's generate choices to choose from
function generateChoices(correctName) {
  choicesList.innerHTML = "";
  const choices = shuffle([...players.map(p => p.name)]);
  if(!choices.includes(correctName)) {
    choices[Math.floor(Math.random() * choices.length)] = correctName;
  }
  choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.innerText = `${String.fromCharCode(65 + index)}. ${choice}`;
    li.addEventListener("click", () => checkAnswer(choice, correctName));
    choiceContainer.appendChild(li);
  });

}

function checkAnswer(selectedName, correctName) {
  messages.classList.remove("hidden");
  if (selectedName === correctName) {
    choices.innerText = "Correct! Well done!!!";
    choices.className = "correct";
    score++;

  } else {
    messages.innerText ="Awww... You'r wrong!";
    messages.className = "wrong";
  }
  nextButton.classList.remove("hidden");
}

function nextPage() {
  currentQuestion++;
  loadGame();
}

function endGame() {
  gameContainer.style.display = "none";
  scoreDetails.style.display = "block";
  finalScore.innerText = `${score} out of 5`;
}

function restartGame() {
  score = 0;
  currentQuestion = 0;
  scoreDetails.style.display = "block";
  loadGame();
}

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
  return array;
}












