const players = [
    {name: "Alisson Becker", image:"assets/images/AlissonBecker.jpg"},
    {name: "André Onana", image:"assets/images/AndréOnana.jpg"},
    {name: "Antoine Griezmann", image:"assets/images/AntoineGriezmann.jpg"},
    {name: "Antonio Rüdiger", image:"assets/images/AntonioRüdiger.jpg"},
    {name: "Bernardo Silva", image:"assets/images/BernardoSilva.png"},
    {name: "Bukayo Saka", image:"assets/images/BukayoSaka.jpg"},
    {name: "Cristiano Ronaldo", image:"assets/images/CristianoRonaldo.jpg"},
    {name: "Declan Rice", image:"assets/images/DeclanRice.jpg"},
    {name: "Erling Haaland", image:"assets/images/ErlingHaaland.jpg"},
    {name: "Florian Wirtz", image:"assets/images/FlorianWirtz.jpg"},
    {name: "Harry Kane", image:"assets/images/HarryKane.jpg"},
    {name: "Jamal Musiala", image:"assets/images/JamalMusiala.jpg"},
    {name: "Jude Bellingham", image:"assets/images/JudeBellingham.jpg"},
    {name: "Kevin De Bruyne", image:"assets/images/KevinDeBruyne.jpg"},
    {name: "Kylian Mbappé", image:"assets/images/KylianMbappe.jpg"},
    {name: "Lamine Yamal", image:"assets/images/LamineYamal.jpg"},
    {name: "Lionel Messi", image:"assets/images/LionelMessi.jpg"},
    {name: "Luka Modrić", image:"assets/images/LukaModric.jpg"},
    {name: "Martin Ødegaard", image:"assets/images/MartinOdegaard.jpg"},
    {name: "Mohamed Salah", image:"assets/images/MohamedSalah.jpg"},
    {name: "Phil Foden", image:"assets/images/PhilFoden.jpg"},
    {name: "Robert Lewandowski", image:"assets/images/RobertLewandowski.jpg"},
    {name: "Rodri", image:"assets/images/Rodri.jpg"},
    {name: "Sadio Mané", image:"assets/images/SadioMané.jpg"},
    {name: "Son Heung-min", image:"assets/images/SonHeung-min.png"},
    {name: "Toni Kroos", image:"assets/images/ToniKroos.jpg"},
    {name: "Victor Osimhen", image:"assets/images/VictorOsimhen.jpg"},
    {name: "Vigil van Dijk", image:"assets/images/VigilvanDijk.jpg"},
    {name: "Vincent Aboubakar", image:"assets/images/VincentAboubakar.jpg"},
    {name: "Vinicius Jr", image:"assets/images/ViniciusJr.jpg"}
]

const gameContainer = document.getElementsByClassName("game-container");
const playerImage = document.getElementById("random-image");
const optionText = document.getElementsByClassName("option-text");
const messages = document.getElementById("messages");
const scores = document.getElementsByClassName("scores");
const nextButton = document.getElementById("next-btn");

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
















