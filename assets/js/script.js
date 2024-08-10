const imageElement = document.getElementById('soccer-image');
const options = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');

let score = 0;
let currentQuestion;

// Array of questions
const questions = [
    {
        image: 'AlissonBecker.jpg',
        correctAnswer: 'option 2',
        options: ['Option 1', 'Option 2', 'Option 3']
    },

    {
        image: 'AndréOnana.jpg',
        correctAnswer: 'option 1',
        options: ['Option 1', 'Option 2', 'Option 3']  
    }
];