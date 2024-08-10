//Get images from folder and set them in an array
imageArray = [
    "AlissonBecker.jpg",
    "AndréOnana.jpg",
    "AntoineGriezmann.jpg",
    "AntonioRüdiger.jpg",
    "BernardoSilva.png",
    "BukayoSaka.jpg",
    "CristianoRonaldo.jpg",
    "DeclanRice.jpg",
    "ErlingHaaland.jpg",
    "FlorianWirtz.jpg",
    "HarryKane.jpg",
    "JamalMusiala.jpg",
    "JudeBellingham.jpg",
    "KevinDeBruyne.jpg",
    "KylianMbappe.jpg",
    "LamineYamal.jpg",
    "LionelMessi.jpg",
    "LukaModric.jpg",
    "MartinOdegaard.jpg",
    "MohamedSalah.jpg",
    "PhilFoden.jpg",
    "RobertLewandowski.jpg",
    "Rodri.jpg",
    "SadioMané.jpg",
    "SonHeung-min.png",
    "ToniKroos.jpg",
    "VictorOsimhen.jpg",
    "VigilvanDijk.jpg",
    "VincentAboubakar.jpg",
    "ViniciusJr"
]

/**
 * Create a random image function
 * Get a random index
 * Select a random image from the random index
 * Display the image
*/

function getRandomImg() {
    randomIndex = Math.floor(Math.random() * imageArray.length);
    selectedImage = imageArray[randomIndex];
    document.getElementById("image-shower").src = `./images/${selectedImage}`;
}