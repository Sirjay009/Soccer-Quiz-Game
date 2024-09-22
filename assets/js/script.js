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
    for(let choice of choice-text) {
        choice.addEventListener("click", function() {
            if(this.getAttribute("data-choice") === "submit") {
                checkAnswer();
            } else {
                let playgame = this.getAttribute("data-choice");
                playgame();
            }
        });
    }
});














