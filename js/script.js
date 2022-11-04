//2a The unordered list where the player’s guessed letters will appear.

const guessedLettersElement = document.querySelector(".guessed-letters");

//2b The button with the text “Guess!” in it.

const button = document.querySelector("button");
button.addEventListener("click", function () {

});


//2c The text input where the player will guess a letter.

const inputBox = document.querySelector(".letter");


//2d The empty paragraph where the word in progress will appear.

const buildWord = document.querySelector(".word-in-progress");
buildWord.innerText.h


//2e The paragraph where the remaining guesses will display.

const pgGuessRem = document.querySelector(".remaining");


//2f The span inside the paragraph where the remaining guesses will display.

const spanGuessRem = document.querySelector(".remaining span");


//2g The empty paragraph where messages will appear when the player guesses a letter.

const guessReply = document.querySelector(".message");



//2h The hidden button that will appear prompting the player to play again.

const hiddenButton = document.querySelector(".play-again hide")
hiddenButton.addEventListener("click", function () {

});

//3 Create another global variable called word and give it the value of "magnolia".
//Magnolia is the starting word to test out the game until you fetch words from a hosted file in a later setup.

const word = `magnolia`;



//Note on where i  left off: i emailed Ann asking her to look over my global values code so far. 
//She hasn't responded yet. I havent gotten any further than magnolia. 