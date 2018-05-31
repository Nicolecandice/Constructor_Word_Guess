var inquirer = require('inquirer');
var letter = require(letter)

var word = require("./word.js")
var index = require("./index.js")

var gameDisplay = index.newWord.wordLs
var guessRemaining = 10
var guessLetters = []
var display = 0
var currentWord

startGame()

function startGame() {
    console.log("----------------------")
    console.log("Word Guess")
    console.log("----------------------")


    // GuessLetters before new game starts
    if(guessLetters.length > 0) {
        guessLetters = []
    }

    inquirer.prompt([
        {
            name: "play",
            type: "confirm",
            message: "Start Game"
        }
    ]).then(function(answer){
        if (answer.play)
        console.log('')
        console.log(" You should get 10 guesses")
        newGame() // call function
    }
)}

function newGame() {
    if(guessRemaining === 10) {
        console.log("---------------------------")


        var ranNum = Math.floor(Math.random() * wordbank.length)
        currentWord = new word(wordBank[randNum])
        currentWord.guessLetters()

        //display current word as blanks
        console.log("")
        console.log(currentWord.wordRender())
        console.log("")
        promptUser()
    } else{
        resetGuessRemaining()
        newGame()
    }
}
function resetGuessRemaining() {
    guessesRemaining = 10
}

function promptUser() {
    inquirer.prompt([
        {
            name: "chosenLetter",
            type: "input",
            message: "Choose a letter",
            validate: function(value) {
                if(isLetter(value)) {
                        return true
                    } else{
                        return false 
                    }
                    }
                }
                ]).then(function(ltr) {
                    // return letter and store variable
                    var letterReturned = (ltr.chosenLetter).toUpperCase()
               var guessAlready = false
               for(var i = 0; i < guessLetters.lenght; i++) {
                   if (letterReturned === guessLetters[i]) {
                   guessAlready = true
                   //------------------------------------

        }                   if (guessedAlready === false) {
                    // push letter into array
                    guessedLetters.push(letterReturned)
        
                    // variable to check if letter was in the word
                    var found = currentWord.checkIfLetterFound(letterReturned)
        
                    if (found === 0) {
                        console.log(' Wrong guess!')
        
                        guessesRemaining--
        
                        // counter for hangman display
                        display++
        
                        console.log('Guesses reamaining: ' + guessesRemaining)
                        console.log(hangManDisplay[display - 1]) // prints the hangman display
        
                        console.log('---------------------------------------------------------')
                        console.log('')
                        console.log(currentWord.wordRender())
                        console.log('')
                        console.log('---------------------------------------------------------')
                        console.log('Letters guessed: ' + guessedLetters)
                    } else {
                        console.log('Yes! You are correct!!')
        
                        if (currentWord.checkWord() === true) {
                            console.log('')
                            console.log(currentWord.wordRender())
                            console.log('')
                            console.log('----- YOU WIN -----')
                            startGame()
                        } else {
                            console.log('Guesses remaining: ' + guessesRemaining)
                            console.log('')
                            console.log(currentWord.wordRender())
                            console.log('')
                            console.log('---------------------------------------------------------')
                            console.log('Letters guessed: ' + guessedLetters)
                        }
                    }
        
                    // if guessesRemaining and the current word isn't found prompt the user
                    if (guessesRemaining > 0 && currentWord.wordFound === false) {
                        promptUser();
                    } else if (guessesRemaining === 0) { // if you don't have any guesses left and haven't found the word you lose
                        console.log('')                
                        console.log('----- GAME OVER -----')
                        console.log('')
                        console.log('The word you were trying to guess was: ' + currentWord.word)
                        console.log('')                
                    }
                } else { // prompts the user that they guessed that letter already
                    console.log('You"ve guessed that letter already, try again.')
                    promptUser();
    }
}
                }
            )}
        
                
        
