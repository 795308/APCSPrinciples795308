//  Nico McCarten
// 	11/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var gameState = 1;//controls gameState
var snake;//the snake
var food;//the food
var score = 0;//the score
var w = 50;//the width of the grid boxes
var header_height;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();//loads everything when the game starts
  frameRate(10);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    if(keyIsPressed === true){
      gameState = 2;//makes it so that the screen is blank until any key is pressed
    }
  }else if (gameState === 2) {
    background(5,5,5);
    runObjects();//runs the game
  }else if (gameState === 3) {
    textAlign(CENTER);
    text("YOU LOSE", 400, 400);//stops the game on tangling
  }
}

function runObjects(){
  snake.run();
  food.run();
}//runs the snake and the food

function loadObjects(){
  snake = new Snake();
  food = new Food(Math.floor(random(width/w - 1)), Math.floor(random(width/w - 1)));//creates food in random position
}//loads the snake and the food
