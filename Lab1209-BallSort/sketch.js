//  Nico McCarten
// 	10/09/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];//Array containing Balls
var numballs;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(150);
  fill(200, 30, 150);

  numBalls = 20;
  loadBalls(numBalls);
  frameRate(10);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function draw() {
  bubbleSort();
}

function loadBalls(num){
  for(var i = 0; i < num; i++){
    var ballClr = Math.floor(random(255));
    var loc = createVector(i*40+20, 400);
    balls[i] = new Ball(loc, ballClr);
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].set(i);//moves all balls to the correct position
  }
  background(150);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();//renders all balls
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function bubbleSort(){
  for(var j = 0; j < balls.length-1; j++){
    if(balls[j].shade > balls[j+1].shade){
      swap(balls, j, j+1);//swaps balls based on the number held in ball.shade
      runBalls();
    }
  }
}
