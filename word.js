var letter = require("./letter.js") 

function word(wd) {
    this.word = wd;
    this.letter = [];
    this.wordFound = false;

}

//get and push letters to the array
this.getletters = function() {
    for (var i =0; i < this.word.length; i++)
    var newletter = new letter (this.word [i]);
    this.letter.push(newletter)
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


