var letter = function(ltr) {
    this.letter = ltr;
    this.appear = false;
}
// input data to screen
this,letterRender = function () {
if(this.letter == '')// render blank
{
this.letter = true
return "_";
}
if(this.letter === false) // render_
return '_'
else {//render the Letter
    return this.letter
}
}


// exporting letter constructor
module.exports = letter
