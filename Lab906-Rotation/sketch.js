//  Nico McCarten
// 	9/6/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []
var attractorBall, repellerBall, attractorBall2, repellerBall2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(500);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);
  runObjects();
}
function loadObjects(n){
  attractorBall = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1)
  repellerBall = new Ball(width/2, height/2, random(-1,1), random(-1,1), -2)
  for(var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}//loads balls into array
function runObjects(){
  attractorBall.run();
  repellerBall.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}//runs the balls
