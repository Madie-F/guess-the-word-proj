//2a The unordered list where the player’s guessed letters will appear.

const guessedLettersElement = document.querySelector(".guessed-letters");

//2b The button with the text “Guess!” in it.

const guessLetterButton = document.querySelector(".guess");
guessLetterButton.addEventListener("click", function (e) {
    
});


//2c The text input where the player will guess a letter.

const letterInput = document.querySelector(".letter");


//2d The empty paragraph where the word in progress will appear.

const wordInProgress = document.querySelector(".word-in-progress");
wordInProgress.innerText = placeholderLetters.join("");
placeholder(word);


//2e The paragraph where the remaining guesses will display.

const remainingGuessesElement = document.querySelector(".remaining");


//2f The span inside the paragraph where the remaining guesses will display.

const remainingGuessesSpan = document.querySelector(".remaining span");


//2g The empty paragraph where messages will appear when the player guesses a letter.

const message = document.querySelector(".message");



//2h The hidden button that will appear prompting the player to play again.

const playAgainButton = document.querySelector(".play-again")
playAgainButton.addEventListener("click", function () {

});

//3 Create another global variable called word and give it the value of "magnolia".
//Magnolia is the starting word to test out the game until you fetch words from a hosted file in a later setup.

const word = "magnolia";



//Note on where i  left off: i emailed Ann asking her to look over my global values code so far. 
//She hasn't responded yet. I havent gotten any further than magnolia. 