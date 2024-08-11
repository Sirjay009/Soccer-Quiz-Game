//Define DOM elements
const imageElement = document.getElementById("soccer-image");
const options = document.querySelectorAll(".choice-text");
const scoreElement = document.getElementById("score");

//Create some question variables

let score = 0;
let currentQuestion;

const questions = [
    {
        image: "assets/images/AlissonBecker.jpg",
        option1: ["Kevin De Bruyne"],
        option2: ["Alisson Becker"],
        option3: ["Phil Foden"],
        answer : 2
        
    },

    {
        image: "assets/images/AndréOnana.jpg",
        option1: ["André Onana"],
        option2: ["Vincent Aboubakar"],
        option3: ["Sadio Mané"],
        answer : 1
        
    },

    {
        image: "assets/images/AntoineGriezmann.jpg",
        option1: ["Florian Wirtz"],
        option2: ["Declan Rice"],
        option3: ["Antoine Griezmann"],
        answer : 3
    },

    {
        image: "assets/images/AntonioRüdiger.jpg",
        option1: ["Antonio Rüdiger"],
        option2: ["Jude Bellingham"],
        option3: ["André Onana"],
        answer : 1
    },

    {
        image: "assets/images/BernardoSilva.png",
        option1: ["Lamine Yamal"],
        option2: ["Bernado Silva"],
        option3: ["Harry Kane"],
        answer : 2
    },

    {
        image: "assets/images/BukayoSaka.jpg",
        option1: ["Bukayo Saka"],
        option2: ["JayJay Okocha"],
        option3: ["Antonio Rüdiger"],
        answer : 1
    },

    {
        image: "assets/images/CristianoRonaldo.jpg",
        option1: ["Son Heung-min"],
        option2: ["Toni Kroos"],
        option3: ["Cristiano Ronaldo"],
        answer : 3
    },

    {
        image: "assets/images/DeclanRice.jpg",
        option1: ["Declan Rice"],
        option2: ["Erling Haaland"],
        option3: ["Rodri"],
        answer : 1
    },

    {
        image: "assets/images/ErlingHaaland.jpg",
        option1: ["Luka Modric"],
        option2: ["Erling Haaland"],
        option3: ["Robert Lewandowski"],
        answer : 2
    },

    {
        image: "assets/images/FlorianWirtz.jpg",
        option1: ["Alisson Becker"],
        option2: ["Kevin De Bruyne"],
        option3: ["Florian Wirtz"],
        answer : 3
    },

    {
        image: "assets/images/HarryKane.jpg",
        option1: ["Harry Kane"],
        option2: ["Martin Odegaard"],
        option3: ["Jamal Musiala"],
        answer : 1
    },

    {
        image: "assets/images/JamalMusiala.jpg",
        option1: ["Bernardo Silva"],
        option2: ["Jamal Musiala"],
        option3: ["Lamine Yamal"],
        answer : 2
    },

    {
        image: "assets/images/JudeBellingham.jpg",
        option1: ["Vinicius Jr"],
        option2: ["Victor Osimhen"],
        option3: ["Jude Bellingham"],
        answer : 3
    },

    {
        image: "assets/images/KevinDeBruyne.jpg",
        option1: ["Kevin De Bruyne"],
        option2: ["Florian Wirtz"],
        option3: ["Phil Foden"],
        answer : 1
    },

    {
        image: "assets/images/KylianMbappe.jpg",
        option1: ["Kanu Nwankwo"],
        option2: ["Kylian Mbappé"],
        option3: ["Antonio Rüdiger"],
        answer : 2
    },

    {
        image: "assets/images/LamineYamal.jpg",
        option1: ["Harry Kane"],
        option2: ["Rodri"],
        option3: ["Lamine Yamal"],
        answer : 3
    },

    {
        image: "assets/images/LionelMessi.jpg",
        option1: ["Lionel Messi"],
        option2: ["Cristiano Ronaldo"],
        option3: ["Vigil van Dijk"],
        answer : 1
    },

    {
        image: "assets/images/LukaModric.jpg",
        option1: ["Martin Odegaard"],
        option2: ["Luka Modrić"],
        option3: ["Vigil van Dijk"],
        answer : 2
    },

    {
        image: "assets/images/MartinOdegaard.jpg",
        option1: ["Rodri"],
        option2: ["Jamal Musiala"],
        option3: ["Martin Ødegaard"],
        answer : 3
    },

    {
        image: "assets/images/MohamedSalah.jpg",
        option1: ["Mohamed Salah"],
        option2: ["Toni Kroos"],
        option3: ["Martin Ødegaard"],
        answer : 1
    },

    {
        image: "assets/images/PhilFoden.jpg",
        option1: ["Alisson Becker"],
        option2: ["Phil Folden"],
        option3: ["Robert Lewandowski"],
        answer : 2
    },

    {
        image: "assets/images/RobertLewandowski.jpg",
        option1: ["Harry Kane"],
        option2: ["Declan Rice"],
        option3: ["Robert Lewandowski"],
        answer : 3
    },

    {
        image: "assets/images/Rodri.jpg",
        option1: ["Rodri"],
        option2: ["Son Heung-min"],
        option3: ["Jamal Musiala"],
        answer : 1
    },

    {
        image: "assets/images/SadioMané.jpg",
        option1: ["Vincent Aboubakar"],
        option2: ["Sadio Mané"],
        option3: ["Victor Osimhen"],
        answer : 2
    },

    {
        image: "assets/images/SonHeung-min.png",
        option1: ["Declan Rice"],
        option2: ["Antoine Griezmann"],
        option3: ["Son Heung-min"],
        answer : 3
    },

    {
        image: "assets/images/ToniKroos.jpg",
        option1: ["Toni Kroos"],
        option2: ["Mohamed Salah"],
        option3: ["Phil Foden"],
        answer : 1
    },

    {
        image: "assets/images/VictorOsimhen.jpg",
        option1: ["Kylian Mbappé"],
        option2: ["Victor Osimhen"],
        option3: ["Vinicius Jr"],
        answer : 2
    },

    {
        image: "assets/images/VigilvanDijk.jpg",
        option1: ["Robert Lewandowski"],
        option2: ["Harry Kane"],
        option3: ["Vigil van Dijk"],
        answer : 3
    },

    {
        image: "assets/images/VincentAboubakar.jpg",
        option1: ["Vincent Aboubakar"],
        option2: ["André Onana"],
        option3: ["Samuel Eto'o"],
        answer : 1
    },

    {
        image: "assets/images/VincentAboubakar.jpg",
        option1: ["André Onana"],
        option2: ["Vincent Aboubakar"],
        option3: ["Samuel Eto'o"],
        answer : 2
    },

    {
        image: "assets/images/ViniciusJr.jpg",
        option1: ["Antonio Rüdiger"],
        option2: ["André Onana"],
        option3: ["Vinicius Jr"],
        answer : 3
    }
];

function loadQuestion() {
    // Randomly select a question
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Set the image source
    imageElement.src = currentQuestion.image;

    // Set the option text
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = score;
    }

    // Load the next question
    loadQuestion();
}

// Event listeners for answer buttons
options.forEach(option => {
    option.addEventListener('click', () => {
        checkAnswer(option.textContent);
    });
});

// Load the first question
loadQuestion();