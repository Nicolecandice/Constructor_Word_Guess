var letter = require("./letter.js") 

function word(wd) {
    this.word = wd;
    this.letter = [];
    this.wordFound = false;

}

//get and push letters to the array
this.getLetters = function() {
    for (var i =0; i < this.word.length; i++)
    var newLetter = new Letter (this.word [i]);
    this.letter.push(newLetter)
}
//check to see if user found current word.
this.checkWord = function (){
    if(this.letters.every(function(ltr) {
        return ltr.appear === true;
    }))
    {
      this.wordFound = true;
      return true;
    }

}
// check if letter is in the word
this.checkIfLetter = function(guessedLetter) {
    var returnLetter = 0

    // Loop throught to see if letter matches 
    this.letters.forEach(function(ltr){
        if(ltr.letter === guesssedLettter) {
            ltr.appear = true
            returnLetter++
        }
    })
    // if letter matches show letter
    return returnLetter
}
this.wordRender = function() {
    var display = ''
    // render if letter is found or not
    this.letter.forEach(function(ltr){
        var curLetter = ltr.letterRender()
        display += curLetter
    })
    return display
}
module.exports = word


