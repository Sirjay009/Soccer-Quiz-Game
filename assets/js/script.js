const welcomePage = document.getElementById("welcome-page");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementsByClassName("game-container");
const playerImage = document.getElementById("random-image");
const optionText = document.getElementsByClassName("option-text");
const messages = document.getElementById("messages");
const scores = document.getElementsByClassName("scores");
const nextButton = document.getElementById("next-btn");
const players = [
    {name: "Alisson Becker", 
     image: "assets/images/AlissonBecker.jpg",
     options: ["Filip Jorgensen", "Gabriel Sara", "Ben White", "Alisson Becker", "Fabian Ruiz"]
    },
    {name: "André Onana", 
     image: "assets/images/AndréOnana.jpg",
     options: ["Axel Disasi", "André Onana", "Jeremie Frimpong", "Tosin Adarabioyo", "Davinson Sánchez"]
    },
    {name: "Antoine Griezmann", 
     image: "assets/images/AntoineGriezmann.jpg",
     options: ["Andreas Christensen", "Sven Ulreich", "William Saliba", "David Raya", "Antoine Griezmann"]
    },
    {name: "Antonio Rüdiger", 
     image: "assets/images/AntonioRüdiger.jpg",
     options: ["Antoine Rüdiger", "Antoine Griezmann", "Axel Disasi", "Jeremie Frimpong", "Gabriel"]
    },
    {name: "Bernardo Silva",
     image: "assets/images/BernardoSilva.png",
     options: ["Bernardo Silva", "Victor Nelsson", "Mikel Merino", "Dani Ceballos", "Niklas Lomb"]
    },
    {name: "Bukayo Saka",
     image: "assets/images/BukayoSaka.jpg",
     options: ["Ousmane Dembélé", "André Onana", "Bukayo Saka", "Jonathan Tan", "Davinson Sánchez"]
    },
    {name: "Cristiano Ronaldo",
     image: "assets/images/CristianoRonaldo.jpg",
     options: ["Lionel Messi", "William Saliba", "Cristiano Ronaldo", "Hiroki Ito", "Pablo Torre"]
    },
    {name: "Declan Rice", 
     image: "assets/images/DeclanRice.jpg",
     options: ["Mikel Merino", "Dani Ceballos", "Declan Rice", "Filip Jorgensen", "Phil Foden"]
    },
    {name: "Erling Haaland",
     image: "assets/images/ErlingHaaland.jpg",
     options: ["Erling Haaland", "Alisson Becker", "Lucas Hernandez", "Victor Nelsson", "Luca Modrić"]
    },
    {name: "Florian Wirtz",
     image:" assets/images/FlorianWirtz.jpg",
     options: ["Robert Sánchez", "William Saliba", "Bernado Silva", "Gabriel Jesus", "Florian Wirtz"]
    },
    {name: "Harry Kane",
     image: "assets/images/HarryKane.jpg",
     options: ["Hakim Ziyeeh", "Harry Kane", "Mikel Merino", "Thibaut Courtois", "Pablo Torre"]
    },
    {name: "Jamal Musiala",
     image: "assets/images/JamalMusiala.jpg",
     options: ["Jamal Musiala", "Lamine Yamal", "David Raya", "William Saliba", "Niklas Lomb"]
    },
    {name: "Jude Bellingham",
     image: "assets/images/JudeBellingham.jpg",
     options: ["Jonathan Tan", "Axel Disasi", "Alejandro Balde", "Jude Bellingham", "Alphonso Davies"]
    },
    {name: "Kevin De Bruyne",
     image: "assets/images/KevinDeBruyne.jpg",
     options: ["Vigil van Dijk", "Kevin De Bruyne", "Lee Kang-in", "Alisson Becker", "Sven Ulreich"]
    },
    {name: "Kylian Mbappé",
     image: "assets/images/KylianMbappe.jpg",
     options: ["Sadio Mané", "Ousmane Dembélé", "Kylian Mbappé", "Tosin Adarabioyo", "Jeremie Frimpong"]
    },
    {name: "Lamine Yamal",
     image: "assets/images/LamineYamal.jpg",
     options: ["Hakim Ziyeeh", "Rodri", "Jamal Musiala", "Gabriel Sara", "Lamine Yamal"]
    },
    {name: "Lionel Messi",
     image: "assets/images/LionelMessi.jpg",
     options: ["Cristiano Ronaldo", "Erling Haaland", "Lionel Messi", "Ben White", "Robert Lewandowski"]
    },
    {name: "Luka Modrić",
     image: "assets/images/LukaModric.jpg",
     options: ["Toni Kroos", "Thomas Partey", "Riccardo Calafiori", "David Raya", "Luka Modrić"]
    },
    {name: "Martin Ødegaard",
     image: "assets/images/MartinOdegaard.jpg",
     options: ["Martin Ødegaard", "Fabian Ruiz", "Manuel Neuer", "Mikel Merino", "Filip Jorgensen"]
    },
    {name: "Mohamed Salah",
     image: "assets/images/MohamedSalah.jpg",
     options: ["Thibaut Courtois", "Dani Ceballos", "Mohamed Salah", "Declan Rice", "Bernado Silva"]
    },
    {name: "Phil Foden",
     image: "assets/images/PhilFoden.jpg",
     options: ["Filip Jorgesen", "Phil Foden", "David Raya", "Gabriel Sara", "Sven Ulreich"]
    },
    {name: "Robert Lewandowski",
     image: "assets/images/RobertLewandowski.jpg",
     options: ["Andreas Christensen", "Robert Sanchez", "Victor Nelsson", "Alphonso Davies", "Robert Lewandowski"]
    },
    {name: "Rodri",
     image: "assets/images/Rodri.jpg",
     options: ["Toni Kroos", "Rodri", "Robert Lewandowski", "Ben White", "Itiroki Ito"]
    },
    {name: "Sadio Mané",
     image: "assets/images/SadioMané.jpg",
     options: ["Jonathan Tan", "Dayot Upamecano", "Victor Osimhen", "Sadio Mané", "André Onana"]
    },
    {name: "Son Heung-min",
     image: "assets/images/SonHeung-min.png",
     options: ["Lee Kang-in", "Itiroki Ito", "Son Heung-min", "Pablo Torre", "Andreas Christensen"]
    },
    {name: "Toni Kroos",
     image: "assets/images/ToniKroos.jpg",
     options: ["Fabian Ruiz", "Toni Kroos", "Thibaut Courtois", "Antoine Griezmann", "Florian Wirtz"]
    },
    {name: "Victor Osimhen",
     image: "assets/images/VictorOsimhen.jpg",
     options: ["André Onana", "Sadio Mané", "Vincent Aboubakar", "Bukayo Saka", "Victor Osimhen"]
    },
    {name: "Vigil van Dijk",
     image: "assets/images/VigilvanDijk.jpg",
     options: ["Victor Nelsson", "Kevin De Bruyne", "Vigil van Dijk", "Harry Kane", "Sven Ulreich"]
    },
    {name: "Vincent Aboubakar",
     image: "assets/images/VincentAboubakar.jpg",
     options: ["Dayot Upamecano", "Jonathan Tan", "Ousmane Dembélé", "Vincent Aboubakar", "Victor Osimhen"]
    },
    {name: "Vinicius Jr",
     image: "assets/images/ViniciusJr.jpg",
     options: ["Vinicius Jr", "Jude Bellingham", "Antonio Rüdiger", "Davinson Sanchez", "Axel Disasi"]
    }
];

startButton.addEventListener("click", function() {
    welcomePage.style.display = "none";
    gameContainer.style.display = "block";
    runGame();
});

/**
 * Wait for the DOM to finish loading before running game
 * Get the button elements and add event listener to them
 */
document.addEventListener("DOMContentLoaded", function(){
    for(let option of option-text) {
        option.addEventListener("click", function() {
            if(this.getAttribute("data-choice") === "submit") {
                checkAnswer();
            } else {
                let runGame = this.getAttribute("data-choice");
                runGame();
            }
        });
    }
});
















