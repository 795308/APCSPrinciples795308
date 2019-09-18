//  Nico McCarten
// 	9/16/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var score = 0
var gameState = 1
var buttons = []
var n = 100
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(n);//How many Balls there are


}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame();
  }else if (gameState === 2) {
    playGame();
  }else if (gameState === 3) {
    endGame();
  }
}//draws the functions
function loadObjects(n){
  paddle = new Paddle(350, 600);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0, 400), random(-5, 5), random(-5, 5));
  }
  for(var i = 0; i < 3; i++){
    buttons[i] = new Button(i);
  }
}//loads balls into array
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}//runs the balls
function playGame(){
  background(5, 5, 5, 20);
  runObjects();
}
function startGame(){
  for(var i = 0; i < buttons.length; i++){
    buttons[i].run();
  }
}
