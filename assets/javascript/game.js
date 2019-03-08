/*
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Choosing a random word by creating an array words to be used
var words = [
    "mcdonalds",
    "subway",
    "burgerking",
    "tacobell",
];

const maxGuesses = 13;          // Maximum number of guesses player has   
var guessedLetters = [];        // Stores the letters guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up

// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxGuesses;
    gameStarted = false;

     // Use Math.floor to round the random number down to neareset whole.
    currentWordIndex = Math.floor(Math.random() * words.length);

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];


}

//Pck a random word from the array
var word = words[Math.floor(Math.random() * words.length)];

//Creating an empty array and fill it with underscores(_) to match number of letters in the word
var answerArray = [];

//Creating for loop
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Creating variable to contain remaining letters
var remainingLetters = word.length;



var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");


*/
// Choosing a random word
// Create an array(list) of words
var words = [
    "mcdonalds",
    "subway",
    "burgerking",
    "tacobell",
];

var word = words[Math.floor(Math.random() * words.length)];

// Set up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// Create variable to keep track of letters that remain to be used guessed
var remainingLetters = word.length;

// The Game Loop
while (remainingLetters > 0) {
    // Show the player their progress
    var el = document.getElementById("demo");
    el.innerHTML = answerArray.join(" ");

    // Get a guess from the player
    var guess = prompt("Guess a letter or click Cancel to stop playing.");
    if (guess === null) {
        //Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // The end of the game loop
}

el.innerHTML = answerArray.join(" ");
alert("Good job: The answer was " + word + ".");