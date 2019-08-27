//  Nico McCarten
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var squares = []
var quads = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(100);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runBalls();
}
function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-10,10), random(-10,10));
    squares[i] = new Square(random(width), random(height), random(-10,10), random(-10,10));
    quads[i] = new Quad(random(width), random(height), random(-10,10), random(-10,10));
  }
}//loads balls into array
function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
    squares[i].run();
    quads[i].run();
  }
}//runs the balls
