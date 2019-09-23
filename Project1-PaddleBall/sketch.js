//  Nico McCarten
// 	9/16/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var score = 0
var gameState = 1
var buttons = []
var n = 1
var health = 20
var difficulty = 0
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    background(5,5,5);
    startGame();
  }else if (gameState === 2) {
    playGame();
  }else if (gameState === 3) {
    background(5,5,5, 20);
    endGame();
  }
}//draws the functions, changes which based on gameState
function loadObjects(n){
  paddle = new Paddle(350, 600);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0, 400), random(-5, 5), random(-5, 5));
  }
  for(var i = 0; i < 4; i++){
    buttons[i] = new Button(i);
  }
}//loads balls into array
function runObjects(){
  paddle.run();
  if(balls.length === 0){
    loadObjects(n)
    n = n + difficulty
  }
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}//runs the balls
function playGame(){
  background(5, 5, 5, 20);
  runObjects();
  if(health === 0){
    gameState = 3
  }
}//plays the game
function startGame(){
  loadObjects(0)
  for(var i = 0; i < 3; i++){
    buttons[i].run();
  }
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("PADDLEBALL", 400, 300);
}//Start screen
function endGame(){
  textAlign(CENTER);
  textSize(100);
  fill(255, 0, 0);
  text("YOU LOSE", 400, 400);
  textSize(50);
  fill(255);
  text("Final Score = " + score, 400, 200);
  buttons[3].run();
}
