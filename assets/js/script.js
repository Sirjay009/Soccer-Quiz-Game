//Define player data array
const players = [
    { name: "Alisson Becker", img: "assets/images/AlissonBecker.jpg" },
    { name: "André Onana", img: "assets/images/AndréOnana.jpg" },
    { name: "Antoine Griezmann", img: "assets/images/AntoineGriezmann.jpg" },
    { name: "AntonioRüdiger", img: "assets/images/AntonioRüdiger.jpg" },
    { name: "Bernardo Silva", img: "assets/images/BernardoSilva.png" },
    { name: "Bukayo Saka", img: "assets/images/BukayoSaka.jpg" },
    { name: "Cristiano Ronaldo", img: "assets/images/CristianoRonaldo.jpg" },
    { name: "Declan Rice", img: "assets/images/DeclanRice.jpg" },
    { name: "Erling Haaland", img: "assets/images/ErlingHaaland.jpg" },
    { name: "Florian Wirtz", img: "assets/images/FlorianWirtz.jpg" },
    { name: "Harry Kane", img: "assets/images/HarryKane.jpg" },
    { name: "Jamal Musiala", img: "assets/images/JamalMusiala.jpg" },
    { name: "Jude Bellingham", img: "assets/images/JudeBellingham.jpg" },
    { name: "Kevin De Bruyne", img: "assets/images/KevinDeBruyne.jpg" },
    { name: "Kylian Mbappé", img: "assets/images/KylianMbappe.jpg" },
    { name: "Lamine Yamal", img: "assets/images/LamineYamal.jpg" },
    { name: "Lionel Messi", img: "assets/images/LionelMessi.jpg" },
    { name: "Luka Modrić", img: "assets/images/LukaModric.jpg" },
    { name: "Martin Ødegaard", img: "assets/images/MartinOdegaard.jpg" },
    { name: "Mohamed Salah", img: "assets/images/MohamedSalah.jpg" },
    { name: "Phil Foden", img: "assets/images/PhilFoden.jpg" },
    { name: "Robert Lewandowski", img: "assets/images/RobertLewandowski.jpg" },
    { name: "Rodri", img: "assets/images/Rodri.jpg" },
    { name: "Sadio Mané", img: "assets/images/SadioMané.jpg" },
    { name: "Son Heung-min", img: "assets/images/SonHeung-min.png" },
    { name: "Toni Kroos", img: "assets/images/ToniKroos.jpg" },
    { name: "Victor Osimhen", img: "assets/images/VictorOsimhen.jpg" },
    { name: "Vigil van Dijk", img: "assets/images/VigilvanDijk.jpg" },
    { name: "Vincent Aboubakar", img: "assets/images/VincentAboubakar.jpg" },
    { name: "Vinicius Jr", img: "assets/images/ViniciusJr.jpg" },
  ];
  

//Let's select a random player from the array

function getRandomPlayer() {
    return players[Math.floor(Math.random() * players.length)];
  }

  //Let's generate random options including the correct answer

  function generateOptions(correctPlayer) {
    const options = [correctPlayer];
    
    while (options.length < 4) {
      const randomPlayer = getRandomPlayer();
      if (!options.includes(randomPlayer)) {
        options.push(randomPlayer);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);  // Shuffle options
  }
  
//Function that displays the player's image and options
  function displayPlayerAndOptions() {
    const player = getRandomPlayer();
    const options = generateOptions(player);
    
    document.getElementById("playerPic").src = player.img;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option.name;
      button.addEventListener("click", () => checkAnswer(option, player));
      optionsDiv.appendChild(button);
    });
  }

//This function checks the answer
  function checkAnswer(selectedOption, correctPlayer) {
    const result = document.getElementById("result");
    
    if (selectedOption.name === correctPlayer.name) {
      result.textContent = "Correct!";
      result.style.color = "green";
    } else {
      result.textContent = `Wrong! It was ${correctPlayer.name}.`;
      result.style.color = "red";
    }
    
    document.getElementById("next").style.display = "block";
  }

//Code to ensures when the "next" button is clicked, a new random player's image and options display
  document.getElementById("next").addEventListener("click", () => {
    displayPlayerAndOptions();
    document.getElementById("result").textContent = "";
    document.getElementById("next").style.display = "none";
  });

//Code that initializes the game when the page loads
  window.onload = () => {
    displayPlayerAndOptions();
  };