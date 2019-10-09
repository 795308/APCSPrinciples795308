/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
var squares = []// Declare squares[] as a global variable
var sN = 0;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function
  loadSquares();
  //  traverse array and run each square
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }
}



function loadSquares(){
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      squares[sN] = new Square(j * 100, i * 100, j, i);
      sN = sN + 1;
    }
  }//loads squares into array
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
