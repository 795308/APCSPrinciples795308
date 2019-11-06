//  Nico McCarten
// 	11/4/19
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 1;
var snake;
var food;
var score;
var w = 10;
var header_height;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(15);
  if(gameState === 1){
    if(keyIsPressed === true){
      gameState = 2;
    }
  }else if (gameState === 2) {
    background(5,5,5);
    runObjects();
  }else if (gameState === 3) {
    textAlign(CENTER);
    text("YOU LOSE", 400, 400);
  }
}

function runObjects(){
  snake.run();
  food.run();
}

function loadObjects(){
  snake = new Snake();
  food = new Food(Math.floor(random(0,79)), Math.floor(random(0,79)));
}
