//  Nico McCarten
// 	9/26/19
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
var w;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  w1 = new Wave(width/2, height/2, 1, 200, width);
  loadObjects(0);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){//blacks out the screen, and then runs the starting screen
    background(5,5,5);
    score = 0;//makes sure that the score is zeroed at the beginning of each game
    startGame();
  }else if (gameState === 2) {//runs the game itself
    playGame();
  }else if (gameState === 3) {//runs the loss screen
    background(5,5,5, 20);
    endGame();
  }else if (gameState === 4) {//runs the instructions screen
    background(5,5,5);
    instructionScreen();
  }
  w1.barwid = map(mouseX, 0, width, 5, 1);
  w1.maxhei = map(mouseY, 0, height, height, 1);
  w1.run();
}//draws the functions, changes which based on gameState
function loadObjects(n){
  paddle = new Paddle(350, 600);//loads paddle
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0, 400), random(-5, 5), random(-5, 5));
  }//loads balls into array
  for(var i = 0; i < 6; i++){
    buttons[i] = new Button(i);
  }//loads buttons into array
}
function runObjects(){
  paddle.run();//runs the paddle
  if(balls.length === 0){
    loadObjects(n);
    n = n + difficulty
  }//creats a number of balls equal to n, then increases n by 2 every time there are no balls
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }//runs balls
}
function playGame(){
  background(5, 5, 5, 20);//makes it so that objects fade away, leaving trails.
  runObjects();//runs runObjects
  if(health === 0){
    gameState = 3
  }//ends the game if health drops to zero by going to gameState 3
}//runs during gameState 2
function startGame(){
  for(var i = 0; i < 4; i++){
    buttons[i].run();
  }//runs buttons 0 through 3, which are the easy, medium, hard, and instructions buttons
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("PADDLEBALL", 400, 300);//creats the PADDLEBALL text on the start screen
}//runs during gameState 1
function endGame(){
  balls.splice(0, balls.length);//removes all balls from the array, so there are none carried over into the next game
  textAlign(CENTER);
  textSize(100);
  fill(255, 0, 0);
  text("YOU LOSE", 400, 400);//writes a red YOU LOSE on the screen
  textSize(50);
  fill(255);
  text("Final Score = " + score, 400, 200);//Shows the final score in white
  buttons[4].run();//runs the retry button
}//runs in gameState 3
function instructionScreen(){
  buttons[5].run();
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("INSTRUCTIONS", 400, 100);
  textSize(25);
  text("Catch falling balls with the paddle to gain points", 400, 325);
  text("Balls hitting the bottom of the paddle make you lose health", 400, 350);
  text("If you run out of health, you lose", 400, 375);
  text("Easy starts with 1 ball, 20 health, and gains 2 balls each time", 400, 400);
  text("Medium starts with 3 balls, 15 health, and gains 3 balls each time", 400, 425);
  text("Hard starts with 5 balls, 10 health, and gains 4 balls each time", 400, 450);
  text("Have fun!", 400, 475);//writes the instructions on how to play the game
}//runs in gameState 4
