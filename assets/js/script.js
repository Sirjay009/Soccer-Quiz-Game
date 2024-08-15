//Declare constants for DOM elements and possible choices
const welcomePage = document.getElementById("welcome-page");
const StartButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");
const randomImage = document.getElementById("random-image");
const choiceContainer = document.getElementById("choice-container");
const message = document.getElementById("message");
const countSection = document.getElementById("count");
const nextButton = document.getElementById("next-btn");

const labels = {
A : document.getElementById("label-a"),
B : document.getElementById("label-b"),
C : document.getElementById("label-c"),
D : document.getElementById("label-d"),
E : document.getElementById("label-e")
};


let counter = 0;
const gameCount = 5;
let correctAnswer = "";

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

function myFunction() {
  document.getElementById("welcome-page").style.display = "none";
}


function startGame() {
  gameContainer.classList.remove("hidden");
  runGame();
}

function runGame() {
  if(counter < gameCount) {
    counter++;
    countSection.textContent = `Count ${counter} of ${gameCount}`;

    const player = players[Math.floor(Math.random() * players.length)];
    correctAnswer = player.name;
    randomImage.src = player.img;

    //Let's ensure the player's name is in the options
    let choices = shuffleArray([...players.map(p => p.name)]);
    if(!choices.includes(correctAnswer)) {
      choices[Math.floor(Math.random() * choices.length)] = correctAnswer;
    }

    console.log("Correct Answer:", correctAnswer);
    console.log("Choices:", choices);
    
    //Let's assign options to labels
    labels.A.textContent = choices[0];
    labels.B.textContent = choices[1];
    labels.C.textContent = choices[2];
    labels.D.textContent = choices[3];
    labels.E.textContent = choices[4];

    //This code adds click event listener to each option
    Object.keys(labels).forEach(key => {
      labels[key].parentElement.addEventListener("click", submitAnswer);
    });

    nextButton.classList.add("hidden");
    message.textContent = "";
    
  } else {
    endGame();
  }
}

function submitAnswer(event) {
  const selectedChoice = event.target.textContent || event.target.nextElementSibling.textContent;

  if(selectedChoice === correctAnswer) {
    message.textContent = "Hey! You got it right! :D";
    message.className = "correct";
    } else {
      message.textContent = `Wrong!. The correct answer was ${correctAnswer}.`;
      message.className ="wrong";
    }

    //Let's prevent further selections by removing event listeners
    Object.keys(labels).forEach(key => {
      labels[key].parentElement.removeEventListener("click", submitAnswer);
    });

    //Let's display the next button to allow users move to the next question
    nextButton.classList.remove("hidden");
  }

function nextQuestion() {
  runGame();
}

function endGame() {
  message.textContent = `Game over! You have completed ${counter} plays.`;
  nextButton.textContent = "Restart Game";
  nextButton.classList.remove("hidden");
  nextButton.addEventListener("click", restartGame);
}

function restartGame() {
  counter = 0;
  nextButton.textContent = "Next";
  startGame();
}

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
  return array;
}

StartButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);