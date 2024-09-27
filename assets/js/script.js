//Get DOM elements
const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const playerImage = document.getElementById("random-image");
const message = document.getElementById("messages");
const scoreBoard = document.getElementsByClassName("scores");
const score = document.getElementById("score");
const incorrect = document.getElementById("incorrect");
const restartButton = document.getElementById("restart-btn");
const options = document.getElementsByClassName("option");
const optionButtons = {
    A: document.getElementById("optionA"),
    B: document.getElementById("optionB"),
    C: document.getElementById("optionC"),
    D: document.getElementById("optionD"),
    E: document.getElementById("optionE")
};

//Declare needed variables
let currentQuestion = 0;
let correctScore = 0;
let incorrectScore = 0;
let play = 0;
let maxPlay = 5;
let correctAnswer = ""
const questionData = [{
        image: "assets/images/AlissonBecker.jpg2.jpg",
        options: ["Filip Jorgensen", "Gabriel Sara", "Ben White", "Alisson Becker", "Fabian Ruiz"],
        answer: "Alisson Becker"
    },
    {
        image: "assets/images/AndréOnana.jpg2.jpg",
        options: ["Axel Disasi", "André Onana", "Jeremie Frimpong", "Tosin Adarabioyo", "Davinson Sánchez"],
        answer: "André Onana"
    },
    {
        image: "assets/images/AntoineGriezmann.jpg2.jpg",
        options: ["Andreas Christensen", "Sven Ulreich", "William Saliba", "David Raya", "Antoine Griezmann"],
        answer: "Antoine Griezmann"
    },
    {
        image: "assets/images/AntonioRüdiger.jpg2.jpg",
        options: ["Antoine Rüdiger", "Antoine Griezmann", "Axel Disasi", "Jeremie Frimpong", "Gabriel"],
        answer: "Antonio Rüdiger"
    },
    {
        image: "assets/images/BernadoSilva.jpg2.jpg",
        options: ["Bernardo Silva", "Victor Nelsson", "Mikel Merino", "Dani Ceballos", "Niklas Lomb"],
        answer: "Bernardo Silva"
    },
    {
        image: "assets/images/BukayoSaka.jpg2.jpg",
        options: ["Ousmane Dembélé", "André Onana", "Bukayo Saka", "Jonathan Tan", "Davinson Sánchez"],
        answer: "Bukayo Saka"
    },
    {
        image: "assets/images/CristianoRonaldo.jpg2.jpg",
        options: ["Lionel Messi", "William Saliba", "Cristiano Ronaldo", "Hiroki Ito", "Pablo Torre"],
        answer: "Cristiano Ronaldo"
    },
    {
        image: "assets/images/DeclanRice.jpg2.jpg",
        options: ["Mikel Merino", "Dani Ceballos", "Declan Rice", "Filip Jorgensen", "Phil Foden"],
        answer: "Declan Rice"
    },
    {
        image: "assets/images/ErlingHaaland.jpg2.jpg",
        options: ["Erling Haaland", "Alisson Becker", "Lucas Hernandez", "Victor Nelsson", "Luca Modrić"],
        answer: "Erling Haaland"
    },
    {
        image: "assets/images/FlorianWirtz.jpg2.jpg",
        options: ["Robert Sánchez", "William Saliba", "Bernado Silva", "Gabriel Jesus", "Florian Wirtz"],
        answer: "Florian Wirtz"
    },
    {
        image: "assets/images/HarryKane.jpg2.jpg",
        options: ["Hakim Ziyeeh", "Harry Kane", "Mikel Merino", "Thibaut Courtois", "Pablo Torre"],
        answer: "Harry Kane"
    },
    {
        image: "assets/images/JamalMusiala.jpg2.jpg",
        options: ["Jamal Musiala", "Lamine Yamal", "David Raya", "William Saliba", "Niklas Lomb"],
        answer: "Jamal Musiala"
    },
    {
        image: "assets/images/JudeBellingham.jpg2.jpg",
        options: ["Jonathan Tan", "Axel Disasi", "Alejandro Balde", "Jude Bellingham", "Alphonso Davies"],
        answer: "Jude Bellingham"
    },
    {
        image: "assets/images/KevinDeBruyne.jpg2.jpg",
        options: ["Vigil van Dijk", "Kevin De Bruyne", "Lee Kang-in", "Alisson Becker", "Sven Ulreich"],
        answer: "Kevin De Bruyne"
    },
    {
        image: "assets/images/KylianMbappe.jpg2.jpg",
        options: ["Sadio Mané", "Ousmane Dembélé", "Kylian Mbappé", "Tosin Adarabioyo", "Jeremie Frimpong"],
        answer: "Kylian Mbappé"
    },
    {
        image: "assets/images/LamineYamal.jpg2.jpg",
        options: ["Hakim Ziyeeh", "Rodri", "Jamal Musiala", "Gabriel Sara", "Lamine Yamal"],
        answer: "Lamine Yamal"
    },
    {
        image: "assets/images/LionelMessi.jpg2.jpg",
        options: ["Cristiano Ronaldo", "Erling Haaland", "Lionel Messi", "Ben White", "Robert Lewandowski"],
        answer: "Lionel Messi"
    },
    {
        image: "assets/images/LukaModric.jpg2.jpg",
        options: ["Toni Kroos", "Thomas Partey", "Riccardo Calafiori", "David Raya", "Luka Modrić"],
        answer: "Luka Modrić"
    },
    {
        image: "assets/images/MartinOdegaard.jpg2.jpg",
        options: ["Martin Ødegaard", "Fabian Ruiz", "Manuel Neuer", "Mikel Merino", "Filip Jorgensen"],
        answer: "Martin Ødegaard"
    },
    {
        image: "assets/images/MohamedSalah.jpg2.jpg",
        options: ["Thibaut Courtois", "Dani Ceballos", "Mohamed Salah", "Declan Rice", "Bernado Silva"],
        answer: "Mohamed Salah"
    },
    {
        image: "assets/images/PhilFoden.jpg2.jpg",
        options: ["Filip Jorgesen", "Phil Foden", "David Raya", "Gabriel Sara", "Sven Ulreich"],
        answer: "Phil Foden"
    },
    {
        image: "assets/images/RobertLewandowski.jpg2.jpg",
        options: ["Andreas Christensen", "Robert Sanchez", "Victor Nelsson", "Alphonso Davies", "Robert Lewandowski"],
        answer: "Robert Lewandowski"
    },
    {
        image: "assets/images/Rodri.jpg2.jpg",
        options: ["Toni Kroos", "Rodri", "Robert Lewandowski", "Ben White", "Itiroki Ito"],
        answer: "Rodri"
    },
    {
        image: "assets/images/SadioMané.jpg2.jpg",
        options: ["Jonathan Tan", "Dayot Upamecano", "Victor Osimhen", "Sadio Mané", "André Onana"],
        answer: "Sadio Mané"
    },
    {
        image: "assets/images/SonHeung-min.png2.png",
        options: ["Lee Kang-in", "Itiroki Ito", "Son Heung-min", "Pablo Torre", "Andreas Christensen"],
        answer: "Son Heung-min"
    },
    {
        image: "assets/images/ToniKroos.jpg2.jpg",
        options: ["Fabian Ruiz", "Toni Kroos", "Thibaut Courtois", "Antoine Griezmann", "Florian Wirtz"],
        answer: "Toni Kroos"
    },
    {
        image: "assets/images/VictorOsimhen.jpg2.jpg",
        options: ["André Onana", "Sadio Mané", "Vincent Aboubakar", "Bukayo Saka", "Victor Osimhen"],
        answer: "Victor Osimhen"
    },
    {
        image: "assets/images/VigilvanDijk.jpg2.jpg",
        options: ["Victor Nelsson", "Kevin De Bruyne", "Vigil van Dijk", "Harry Kane", "Sven Ulreich"],
        answer: "Vigil van Dijk"
    },
    {
        image: "assets/images/VincentAboubakar.jpg2.jpg",
        options: ["Dayot Upamecano", "Jonathan Tan", "Ousmane Dembélé", "Vincent Aboubakar", "Victor Osimhen"],
        answer: "Vincent Aboubakar"
    },
    {
        image: "assets/images/ViniciusJr.jpg2.jpg",
        options: ["Vinicius Jr", "Jude Bellingham", "Antonio Rüdiger", "Davinson Sanchez", "Axel Disasi"],
        answer: "Vinicius Jr"
    }
];

function runGame() {
    currentQuestion = 0;
    correctScore = 0;
    incorrectScore = 0;
    score.textContent = correctScore;
    incorrect.textContent = incorrectScore;
    restartButton.style.display = "none";
    message.textContent = "";
    loadQuestion();

}

function loadQuestion() {
        const player = questionData[Math.floor(Math.random() * questionData.length)];
        correctAnswer = player.answer;
        playerImage.src = player.image;
        message.textContent = "";
        restartButton.style.display = "none";

        const choices = shuffleArray(player.options);
        optionButtons.A.textContent = choices[0];
        optionButtons.B.textContent = choices[1];
        optionButtons.C.textContent = choices[2];
        optionButtons.D.textContent = choices[3];
        optionButtons.E.textContent = choices[4];
}

startButton.addEventListener("click", e => {
    welcomePage.style.display = "none";
    gameContainer.style.display = "block";
    runGame();
});

function checkAnswer() {
    if (this.innerText === correctAnswer) {
        message.textContent = "Congrats! Answer is Correct.";
        message.style.color = "green";
        incrementScore();

    } else {
        message.textContent = `Incorrect! The answer was -${correctAnswer}-`;
        message.style.color = "red";
        incrementWrongScore();
    }
    currentQuestion++;
    if(currentQuestion >= maxPlay) {
        endGame();
    } else {
        setTimeout(loadQuestion, 1500);
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore
}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore
}

function endGame() {
    message.textContent = "Game over!";
    restartButton.style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        [array[i], array[k]] = [array[k], array[i]];
    }
    return array
}

//Add event listeners
restartButton.addEventListener("click", runGame);
for (let button in optionButtons) {
    optionButtons[button].addEventListener("click", checkAnswer);
}